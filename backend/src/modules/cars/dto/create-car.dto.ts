import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsString } from 'class-validator';

export class CreateCarDto {
  @ApiProperty({ default: 'Zonda' })
  @IsString()
  brand: string;

  @ApiProperty({ default: 'Pagani Zonda HP Barchetta' })
  @IsString()
  model: string;

  @ApiProperty({ default: '2022' })
  @IsString()
  year: string;

  @ApiProperty({ default: 0 })
  @IsInt()
  km: number;

  @ApiProperty({ default: 'azul' })
  @IsString()
  color: string;

  @ApiProperty({ default: 'elétrico' })
  @IsString()
  fuel: string;

  @ApiProperty({ default: 140000 })
  @IsInt()
  price: number;

  @ApiProperty({
    default:
      'O Pagani Zonda HP Barchetta é um superesportivo que teve apenas três unidades produzidas.',
  })
  @IsString()
  description: string;

  @ApiProperty({
    default:
      'https://www.otempo.com.br/image/policy:1.2890015:1686947541/pagani_zonda_hp_barchetta_745.jpeg?f=3x2&w=400&q=0.3',
  })
  @IsString()
  imgCover: string;

  @ApiProperty()
  @IsBoolean()
  bestPrice: boolean

}
