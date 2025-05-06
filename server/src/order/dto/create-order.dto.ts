import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({ example: 'Optional: future expansion' })
  note?: string;
}
