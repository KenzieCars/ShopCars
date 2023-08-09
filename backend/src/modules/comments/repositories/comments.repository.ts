import { Comment } from '../entities/comment.entity';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { UpdateCommentDto } from '../dto/update-comment.dto';

export abstract class CommentsRepository {
  abstract create(data: CreateCommentDto, userId: string): Promise<Comment>;
  abstract findAll(): Promise<Comment[]>;
  abstract findOne(id: string): Promise<Comment>;
  abstract update(id: string, data: UpdateCommentDto): Promise<Comment>;
  abstract delete(id: string): Promise<void>;
}
