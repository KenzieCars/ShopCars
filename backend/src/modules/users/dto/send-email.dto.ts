import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';

export class SendEmaildto {
  @IsString()
  to: string;

  @ApiProperty()
  @IsEmail()
  subject: string;

  @IsString()
  text: string;
}
