import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { CarsRepository } from './repositories/cars.repository';

@Injectable()
export class CarsService {
  constructor(private carsRepository: CarsRepository) {}

  async create(data: CreateCarDto, userId: string) {
    return await this.carsRepository.create(data, userId);
  }

  async findAll() {
    return await this.carsRepository.findAll();
  }

  async findOne(id: string) {
    const car = await this.carsRepository.findOne(id);

    if (!car) {
      throw new NotFoundException('Car not found');
    }

    return car;
  }

  async update(id: string, updateCarDto: UpdateCarDto) {
    const findCar = await this.carsRepository.findOne(id);

    if (!findCar) {
      throw new NotFoundException('Car not found');
    }

    return this.carsRepository.update(id, updateCarDto);
  }

  async remove(id: string) {
    const findCar = await this.carsRepository.findOne(id);

    if (!findCar) {
      throw new NotFoundException('Car not found');
    }

    return this.carsRepository.delete(id);
  }
}
