import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString, Min } from 'class-validator';

export class AddItemDto {
  @ApiProperty({ example: 'user-uuid' })
  @IsString()
  userId: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  productId: number;

  @ApiProperty({ example: 2 })
  @IsInt()
  @Min(1)
  @IsPositive()
  quantity: number;
}