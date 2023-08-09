import { randomUUID } from "crypto";

export class Comment {
  readonly id: string;

  description: string;

  carId: string;
  userId: string;

  constructor() {
    this.id = randomUUID();
  }
}
