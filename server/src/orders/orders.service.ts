import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateOrderDto, userId: string) {
    return this.prisma.order.create({
      data: {
        status: dto.status,
        items: dto.items,
        user: { connect: { id: userId } },  
      },
    });
  }

  async findAll() {
    return this.prisma.order.findMany();
  }

  async findByUser(userId: string) {
    return this.prisma.order.findMany({ where: { userId } });
  }

  async findOne(id: number) {
    const order = await this.prisma.order.findUnique({ where: { id } });
    if (!order) throw new NotFoundException('Order not found');
    return order;
  }

  async update(id: number, dto: UpdateOrderDto) {
    await this.findOne(id); // Ensure it exists
    return this.prisma.order.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.order.delete({ where: { id } });
  }
}
