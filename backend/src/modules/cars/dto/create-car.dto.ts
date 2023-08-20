import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsString } from 'class-validator';

export class CreateCarDto {
  @ApiProperty()
  @IsString()
  brand: string;

  @ApiProperty()
  @IsString()
  model: string;

  @ApiProperty()
  @IsString()
  year: string;

  @ApiProperty()
  @IsInt()
  km: number;

  @ApiProperty()
  @IsString()
  color: string;

  @ApiProperty()
  @IsString()
  fuel: string;

  @ApiProperty()
  @IsInt()
  price: number;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  imgCover: string;

  @ApiProperty()
  @IsBoolean()
  bestPrice: boolean

}
