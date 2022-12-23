import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Users name' })
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Users email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Users password' })
  readonly password: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ description: 'Users age' })
  readonly age: number;

  @IsUrl()
  @ApiProperty({ description: 'Users pic' })
  readonly avatar: string;
}
