import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateImageDto {
  @ApiProperty()
  @IsString()
  imgGalery: string;

  @ApiProperty()
  @IsString()
  carId: string;
}
