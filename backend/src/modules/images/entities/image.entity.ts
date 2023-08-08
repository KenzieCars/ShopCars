import { randomUUID } from "crypto";

export class Image {
  readonly id: string;
  imgGalery: string;
  carId: string;

  constructor() {
    this.id = randomUUID();
  }
}
