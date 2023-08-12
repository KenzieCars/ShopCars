import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CarsRepository } from '../cars.repository';
import { CreateCarDto } from '../../dto/create-car.dto';
import { Car } from '../../entities/car.entity';
import { UpdateCarDto } from '../../dto/update-car.dto';

@Injectable()
export class CarsPrismaRepository implements CarsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCarDto, userId: string): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      ...data,
      userId: userId,
    });

    const newCar = await this.prisma.car.create({
      data: {
        id: car.id,

        brand: car.brand,
        model: car.model,
        year: car.year,
        km: car.km,
        color: car.color,
        status: car.status,
        fuel: car.fuel,
        price: car.price,
        description: car.description,
        imgCover: car.imgCover,
        bestPrice: car.bestPrice,

        userId: car.userId,
      },
    });

    return newCar;
  }

  async findAll(): Promise<Car[]> {
    const cars = await this.prisma.car.findMany({
      include: {
        images: true,
        comments: true,
        user: true
      }
    });

    return cars;
  }

  async findOne(id: string): Promise<Car> {
    const car = await this.prisma.car.findFirst({
      where: { id },
      include: {
        images: true,
        comments: true,
        user: true
      }
    });
    return car;
  }

  async update(id: string, data: UpdateCarDto): Promise<Car> {
    const car = await this.prisma.car.update({
      where: { id },
      include: {
        images: true,
        comments: true,
        user: true
      },
      data: { ...data },
    });
    return car;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.car.delete({
      where: { id },
    });
  }
}
