import { ApiProperty } from '@nestjs/swagger';

export class OrderEntity {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  total: number;

  @ApiProperty()
  status: string;

  @ApiProperty()
  createdAt: Date;
}
