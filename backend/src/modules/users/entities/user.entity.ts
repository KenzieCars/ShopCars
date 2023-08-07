import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

export class User {
  readonly id: string;
  name: string;
  email: string;
  seller: boolean;
  cellPhone: string;
  cpf: string;
  dateOfBirth: string;
  description: string;
  city: string;
  state: string;
  street: string | null;
  number: number | null;
  complement: string | null;

  @Exclude()
  password: string;

  constructor() {
    this.id = randomUUID();
  }
}
