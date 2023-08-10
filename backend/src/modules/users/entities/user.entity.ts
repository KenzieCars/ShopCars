import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

export class User {
  readonly id: string;
  name: string;
  email: string;
  readonly seller: boolean;
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

  @Exclude()
  isAdm: boolean;

  constructor() {
    this.id = randomUUID();
  }
}
