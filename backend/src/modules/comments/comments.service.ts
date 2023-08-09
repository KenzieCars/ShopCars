import { Injectable, NotFoundException } from '@nestjs/common';
import { CommentsRepository } from './repositories/comments.repository';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';


@Injectable()
export class CommentsService {
  constructor(private commentsRepository: CommentsRepository) {}

  async create(data: CreateCommentDto, userId: string) {
    return await this.commentsRepository.create(data, userId);
  }

  async findAll() {
    return await this.commentsRepository.findAll();
  }

  async findOne(id: string) {
    const comment = await this.commentsRepository.findOne(id);

    if (!comment) {
      throw new NotFoundException('comment not found');
    }
    return comment;
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    const findcomment = await this.commentsRepository.findOne(id);

    if (!findcomment) {
      throw new NotFoundException('Comment Not found');
    }

    return this.commentsRepository.update(id, updateCommentDto);
  }

  async remove(id: string) {
    const findcomment = await this.commentsRepository.findOne(id);

    if (!findcomment) {
      throw new NotFoundException('comment Not found');
    }

    return this.commentsRepository.delete(id);
  }
}
