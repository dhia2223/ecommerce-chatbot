import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @MinLength(6)
  @ApiProperty()
  password: string;
}

export class LoginDto {

  @ApiProperty()
  @IsEmail()
  email: string;
  
  @ApiProperty()
  @IsNotEmpty()
  password: string;
}
