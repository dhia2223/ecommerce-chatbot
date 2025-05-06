import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async createOrder(userId: string) {
    const cart = await this.prisma.cart.findUnique({
      where: { userId },
      include: { items: { include: { product: true } } },
    });

    if (!cart || cart.items.length === 0) {
      throw new BadRequestException('Cart is empty.');
    }

    const total = cart.items.reduce((sum, item) => sum + item.quantity * item.product.price, 0);

    const order = await this.prisma.order.create({
      data: {
        userId,
        total,
        items: {
          create: cart.items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.product.price,
          })),
        },
      },
      include: { items: true },
    });

    await this.prisma.cartItem.deleteMany({ where: { cartId: cart.id } });

    return order;
  }

  async getOrdersByUser(userId: string) {
    return this.prisma.order.findMany({
      where: { userId },
      include: {
        items: { include: { product: true } },
      },
    });
  }

  async getAllOrders() {
    return this.prisma.order.findMany({
      include: {
        user: true,
        items: { include: { product: true } },
      },
    });
  }

  async updateOrderStatus(id: string, status: string) {
    const order = await this.prisma.order.findUnique({ where: { id } });
    if (!order) throw new NotFoundException('Order not found');

    return this.prisma.order.update({
      where: { id },
      data: { status },
    });
  }
}
