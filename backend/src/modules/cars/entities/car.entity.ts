import { randomUUID } from 'node:crypto';

export class Car {
  readonly id: string;

  brand: string;
  model: string;
  year: string;
  km: number;
  color: string;
  status: boolean;
  fuel: string;
  price: number;
  description: string;
  imgCover: string;
  bestPrice: boolean;
  
  userId: string;

  constructor() {
    this.id = randomUUID();
  }
}
