import { IsString, IsNotEmpty, IsOptional, IsJSON } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {


  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  status: string;

  @ApiProperty({ description: ' JSON for order items' })
  @IsNotEmpty()
  items: any;
}
