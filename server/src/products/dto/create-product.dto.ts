import { IsString, IsNotEmpty, IsNumber, IsOptional, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Pistachio Butter' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Food' })
  @IsString()
  @IsNotEmpty()
  category: string;

  @ApiProperty({ example: 'pistachio,spread', required: false })
  @IsOptional()
  @IsString()
  tags?: string;

  @ApiProperty({ example: 100 })
  @IsNumber()
  @IsNotEmpty()
  stock: number;

  @ApiProperty({ example: 12.99 })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({ example: ['url1.png', 'url2.png'], required: false })
  @IsOptional()
  @IsArray()
  images?: string[];

  @ApiProperty({ example: 'This is the best pistachio butter you will ever taste.', required: false })
  @IsOptional()
  @IsString()
  description?: string;
}
