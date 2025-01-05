import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiUnprocessableEntityResponse, ApiQuery } from "@nestjs/swagger";
import { ErrorResponseDto } from "../../common/dto/error.dto";
import { Roles } from "../../system/users/roles.decorator";
import { UserRole } from "../../system/users/user.entity";
import { EntriesService } from "./entries.service";
import { EntryCreationDto, EntryResponseDto, EntryMutationDto } from "./entry.dto";

@ApiTags("Entries")
@Controller("entries")
export class EntriesController {
  constructor(private readonly entriesService: EntriesService) {}

  @Post()
  @ApiOperation({ summary: "Create a entry" })
  @ApiUnprocessableEntityResponse({ description: "Unique name constraint violation", type: ErrorResponseDto })
  create(@Body() entry: EntryCreationDto): Promise<EntryResponseDto> {
    return this.entriesService.create(entry);
  }

  @Get()
  @ApiOperation({ summary: "Get all entries" })
  @ApiQuery({
    name: "entryTemplatesForParticipant",
    required: false,
    type: String,
    description:
      "Uniquely grouped entries by ratio, carer and language, that are used as templates when creating new entries for a participant",
  })
  index(@Query("entryTemplatesForParticipant") entryTemplatesForParticipant?: string): Promise<EntryResponseDto[]> {
    if (entryTemplatesForParticipant) {
      return this.entriesService.findTemplatesForParticipant(entryTemplatesForParticipant);
    }
    return this.entriesService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get a entry by ID" })
  get(@Param("id") id: string): Promise<EntryResponseDto> {
    return this.entriesService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update a entry by ID" })
  update(@Param("id") id: string, @Body() entry: EntryMutationDto): Promise<EntryResponseDto> {
    return this.entriesService.update(+id, entry);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete a entry by ID" })
  @Roles(UserRole.ADMIN)
  delete(@Param("id") id: string) {
    return this.entriesService.remove(+id);
  }
}
