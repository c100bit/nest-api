import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'email@test.ru', description: 'Email' })
  @IsString({ message: 'sring' })
  @IsEmail({},  { message: 'sring' })
  readonly email: string;

  @IsString({ message: 'sring' })
  @Length(1, 1, { message: 'df' })
  @ApiProperty({ example: '1231321', description: 'password' })
  readonly password: string;
}
