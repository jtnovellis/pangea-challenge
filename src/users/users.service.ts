import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private usersModule: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.usersModule.create(createUserDto);
    return {
      message: 'User created',
      data: user,
    };
  }

  async findAll() {
    const users = await this.usersModule.find();
    return {
      message: 'Users found',
      data: users,
    };
  }

  async findOne(id: string) {
    const user = await this.usersModule.findById(id);
    return {
      message: 'User found',
      data: user,
    };
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersModule.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
    return {
      message: 'User updated',
      data: user,
    };
  }

  async remove(id: string) {
    const user = await this.usersModule.findByIdAndRemove(id);
    return {
      message: 'User removed',
      data: user,
    };
  }
}
