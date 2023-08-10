import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtauthGuard } from '../auth/jwt-auth.guard';
import { CarPermissionGuard } from './guards/car-permission.guard';


@ApiTags('Cars')
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  @UseGuards(JwtauthGuard)
  @ApiBearerAuth()
  create(@Body() data: CreateCarDto, @Request() req) {

    return this.carsService.create(data, req.user.id);
  }

  @Get()
  findAll() {
    return this.carsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtauthGuard, CarPermissionGuard)
  update(@Param('id') id: string, @Body() data: UpdateCarDto) {
    return this.carsService.update(id, data);
  }

  @Delete(':id')
  @UseGuards(JwtauthGuard, CarPermissionGuard)
  remove(@Param('id') id: string) {
    return this.carsService.remove(id);
  }
}
