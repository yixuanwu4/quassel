import { ApiProperty, PartialType } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { IsDateString, IsNotEmpty, IsOptional } from "class-validator";
import { EntryResponseDto } from "../entries/entry.dto";
import { ParticipantResponseDto } from "../participants/participant.dto";

class QuestionnaireBaseDto {
  @ApiProperty({ example: "2024-11-01T07:00:00.000Z", description: "The starting date of the questionnaire" })
  @IsDateString()
  @Expose()
  startedAt: Date;

  @ApiProperty({ example: "2024-11-01T08:00:00.00Z", description: "The ending date of the questionnaire" })
  @IsDateString()
  @Expose()
  endedAt: Date;

  @ApiProperty({ example: "First few months", description: "The title of the questionnaire" })
  @IsNotEmpty()
  @Expose()
  title: string;

  @ApiProperty({ example: "We went on holidays for 2 weeks and only spoke Esperanto", description: "The remark of the questionnaire" })
  @Expose()
  remark?: string;

  @ApiProperty({ example: "2024-11-01T07:00:00.000Z", description: "The date the questionnaire was completed" })
  @IsOptional()
  @IsDateString()
  @Expose()
  completedAt?: Date;
}

export class QuestionnaireResponseDto extends QuestionnaireBaseDto {
  @ApiProperty({ example: 1, description: "The id of the questionnaire" })
  @Expose()
  id: number;

  @ApiProperty({ example: "2024-11-01T07:00:00.000Z", description: "The date the questionnaire was created" })
  @Expose()
  createdAt: Date;

  @Type(() => ParticipantResponseDto)
  @Expose()
  participant: ParticipantResponseDto;
}

export class QuestionnaireDetailResponseDto extends QuestionnaireResponseDto {
  @Type(() => EntryResponseDto)
  @Expose()
  entries: EntryResponseDto[];
}

export class QuestionnaireCreationDto extends QuestionnaireBaseDto {
  participant: number;
}
export class QuestionnaireMutationDto extends PartialType(QuestionnaireCreationDto) {}

export enum QuestionnaireSortableField {
  createdAt = "createdAt",
  completedAt = "completedAt",
}
