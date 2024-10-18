import { Collection, Entity, ManyToOne, OneToMany, Property } from "@mikro-orm/core";
import { BaseEntity } from "./base.entity";
import { Study } from "./study.entity";
import { Participant } from "./participant.entity";
import { Entry } from "./entry.entity";

@Entity()
export class Questionnaire extends BaseEntity {
  @Property()
  startedAt!: Date;

  @Property()
  endedAt!: Date;

  @Property()
  description!: string;

  @Property()
  remark?: string;

  @ManyToOne()
  study!: Study;

  @ManyToOne()
  participant!: Participant;

  @OneToMany(() => Entry, (entry) => entry.questionnarie)
  entries = new Collection<Entry>(this);
}
