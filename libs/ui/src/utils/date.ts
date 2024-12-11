import dayjs from "dayjs";

export function formatDate(date: Date, dayjsFormatTemplate: string) {
  return dayjs(date).format(dayjsFormatTemplate);
}

export const getTime = (date: Date) => formatDate(date, "HH:mm");

export const getNext = (unit: dayjs.ManipulateType, date: Date) => {
  return dayjs(date).add(1, unit).startOf(unit).toDate();
};

export function getDateFromTimeAndWeekday(time: string, weekday: number) {
  return dayjs(time, "HH:mm:ss")
    .set("day", weekday)
    .add(weekday === 0 ? 1 : 0, "week")
    .toDate();
}
