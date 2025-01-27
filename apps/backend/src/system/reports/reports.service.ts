import { Collection, EntityManager } from "@mikro-orm/postgresql";
import { Injectable } from "@nestjs/common";
import { Participant } from "../../research/participants/participant.entity";
import { Entry } from "../../research/entries/entry.entity";
import { differenceInSeconds, parse } from "date-fns";
import { stringify } from "csv-stringify/sync";
import { Language } from "../../defaults/languages/language.entity";

type LanguageExposure = Map<Language, number>;

@Injectable()
export class ReportsService {
  constructor(private readonly em: EntityManager) {}

  async evaluatedLanguageExposure(studyId: number) {
    const participants = await this.em.findAll(Participant, {
      where: { questionnaires: { study: { id: studyId } } },
      populate: [
        "questionnaires",
        "questionnaires.entries",
        "questionnaires.entries.entryLanguages",
        "questionnaires.entries.entryLanguages.language",
      ],
    });

    const evaluatedExposurePerParticipant = participants.map((participant) => {
      const exposure = this.getParticipantExposure(participant);
      const sortedExposureEntries = Array.from(exposure).sort(([_a, exposureA], [_b, exposureB]) => exposureB - exposureA);
      const exposureSum = sortedExposureEntries.reduce((acc, [_, exposure]) => acc + exposure, 0);

      return sortedExposureEntries.reduce(
        (acc, [language, duration], index) => {
          acc[`L${index + 1}`] = duration / exposureSum;
          acc[`L${index + 1}_id`] = language.id;
          acc[`L${index + 1}_name`] = language.name;

          return acc;
        },
        { participant: participant.id }
      );
    });

    return stringify(evaluatedExposurePerParticipant, { header: true });
  }

  getParticipantExposure(participant: Participant) {
    return participant.questionnaires.reduce<LanguageExposure>((acc, questionnaire) => {
      const entriesByWeekday = this.groupByWeekday(questionnaire.entries);

      entriesByWeekday.forEach((weekday) => {
        this.entriesByInterval(weekday).forEach((entriesInInterval, [start, end]) => {
          const duration = this.durationInSeconds(start, end);

          entriesInInterval.forEach((entry) => {
            entry.entryLanguages.map(({ language, ratio }) => {
              acc.set(language, (acc.get(language) ?? 0) + (((ratio / 100) * duration) / entriesInInterval.length) * questionnaire.duration);
            });
          });
        });
      });

      return acc;
    }, new Map());
  }

  private entriesByInterval(entries: Entry[]) {
    const entriesByInterval = new Map<[string, string], Entry[]>();

    const timeEntriesMap = this.groupEntriesByStartAndEnd(entries);

    const sortedTimes = Object.keys(timeEntriesMap).sort((a, b) => a.localeCompare(b));
    let ongoingEntries: Entry[] = [];

    sortedTimes.forEach((start, index) => {
      const end = sortedTimes[index + 1];

      if (!end) return;

      const entriesInInterval = [...ongoingEntries, ...timeEntriesMap[start]].filter((entry) => entry.endedAt !== start);
      ongoingEntries = entriesInInterval.filter((e) => e.endedAt > end);

      entriesByInterval.set([start, end], entriesInInterval);
    });

    return entriesByInterval;
  }

  private durationInSeconds(start: string, end: string) {
    return differenceInSeconds(parse(end, "HH:mm:ss", new Date()), parse(start, "HH:mm:ss", new Date()));
  }

  private groupEntriesByStartAndEnd(entries: Entry[]) {
    return entries.reduce<Record<string, Entry[]>>((acc, entry) => {
      acc[entry.startedAt] = [...(acc[entry.startedAt] ?? []), entry];
      acc[entry.endedAt] = [...(acc[entry.endedAt] ?? []), entry];
      return acc;
    }, {});
  }

  private groupByWeekday(entries: Collection<Entry, object>) {
    return entries.reduce<Entry[][]>((acc, cur) => {
      acc[cur.weekday] = [...(acc[cur.weekday] ?? []), cur];
      return acc;
    }, []);
  }
}
