import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateStatusDto {
  @ApiProperty({ example: 'shipped' })
  @IsString()
  status: string;
}
