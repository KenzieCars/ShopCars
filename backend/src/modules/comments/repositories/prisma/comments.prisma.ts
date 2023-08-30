import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateCommentDto } from '../../dto/create-comment.dto';
import { UpdateCommentDto } from '../../dto/update-comment.dto';
import { Comment } from '../../entities/comment.entity';
import { CommentsRepository } from '../comments.repository';

@Injectable()
export class CommentsPrismaRepository implements CommentsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCommentDto, userId: string): Promise<Comment> {
    const comment = new Comment();

    const car = await this.prisma.car.findFirst({
      where: { id: data.carId },
    });

    if(!car){
      throw new NotFoundException("Car not found")
    }

    Object.assign(comment, {
      ...data,
      userId: userId,
    });

    const newComment = await this.prisma.comment.create({
      data: {
        id: comment.id,

        description: comment.description,

        carId: comment.carId,
        userId: comment.userId,
      },
      include: {
        user: true
      }
    });

    return newComment;
  }

  async findAll(): Promise<Comment[]> {
    const comments = await this.prisma.comment.findMany();
    return comments;
  }

  async findOne(id: string): Promise<Comment> {
    const comment = await this.prisma.comment.findFirst({
      where: { id },
      include: {
        user: true
      }
    });
    return comment;
  }

  async update(id: string, data: UpdateCommentDto): Promise<Comment> {
    const comment = await this.prisma.comment.update({
      where: { id },
      data: { ...data },
    });
    
    return comment;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.comment.delete({
      where: { id },
    });
  }

}
