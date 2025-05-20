import { IsInt, IsOptional, IsString, IsUUID, Min, Max } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateReviewDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'The unique identifier of the user' })
  @IsUUID()
  userId: string;

  @ApiProperty({ example: 101, description: 'The unique identifier of the product' })
  @IsInt()
  productId: number;

  @ApiProperty({ example: 'Great product!', description: 'The review comment' })
  @IsString()
  comment: string;

  @ApiPropertyOptional({ example: 5, description: 'The rating of the product (1-5)' })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(5)
  rating?: number;
}
