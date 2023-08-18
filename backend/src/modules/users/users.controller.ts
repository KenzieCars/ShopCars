import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtauthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserPermissionGuard } from './guards/user-permission.guard';
import { UserAdmPermissionGuard } from './guards/userAdm-permission.guard';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  @UseGuards(
    JwtauthGuard, 
    UserAdmPermissionGuard
  )
  @ApiBearerAuth()
  findAll() {
    return this.usersService.findAll();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get("profile")
  findAllProfile() {
    return this.usersService.findAllProfile();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  @UseGuards(JwtauthGuard, UserPermissionGuard)
  @ApiBearerAuth()
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.findOne(id);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Patch(':id')
  @UseGuards(JwtauthGuard, UserPermissionGuard)
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Delete(':id')
  @UseGuards(JwtauthGuard, UserPermissionGuard)
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @HttpCode(200)
  @Post('resetPassword')
  async sendEmailResetPassword(@Body('email') email: string) {
    await this.usersService.sendEmailResetPassword(email);
    return { message: 'token send' };
  }

  @Patch('resetPassword/:token')
  async resetPassword(
    @Param('token') token: string,
    @Body('password') password: string,
  ) {
    await this.usersService.resetPassword(password, token);
    return { message: 'password change with sucess ' };
  }
}
