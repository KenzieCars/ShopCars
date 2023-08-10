import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtauthGuard } from '../auth/jwt-auth.guard';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentsService } from './comments.service';
import { CommentPermissionGuard } from './guards/updateOrDeletePermission.guard';

@ApiTags('Comments')
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  @UseGuards(JwtauthGuard)
  @ApiBearerAuth()
  create(@Body() data: CreateCommentDto, @Request() req) {
    return this.commentsService.create(data, req.user.id);
  }

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtauthGuard, CommentPermissionGuard)
  update(@Param('id') id: string, @Body() data: UpdateCommentDto) {
    return this.commentsService.update(id, data);
  }

  @Delete(':id')
  @UseGuards(JwtauthGuard, CommentPermissionGuard)
  remove(@Param('id') id: string) {
    return this.commentsService.remove(id);
  }
}
