import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";

export class Comment {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  carId: string;

  @ApiProperty()
  userId: string;

  constructor() {
    this.id = randomUUID();
  }
}
