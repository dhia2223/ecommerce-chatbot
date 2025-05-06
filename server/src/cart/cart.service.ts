import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddItemDto } from './dto/add-cart-item.dto';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async addItem(dto: AddItemDto) {


    const product = await this.prisma.product.findUnique({
      where: { id: dto.productId },
    });
  
    if (!product) {
      throw new NotFoundException('Product does not exist');
    }
    
    let cart = await this.prisma.cart.findFirst({
      where: { userId: dto.userId },
    });

    if (!cart) {
      cart = await this.prisma.cart.create({
        data: { userId: dto.userId },
      });
    }

    const existingItem = await this.prisma.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productId: dto.productId,
      },
    });

    if (existingItem) {
      return this.prisma.cartItem.update({
        where: { id: existingItem.id },
        data: { quantity: existingItem.quantity + dto.quantity },
      });
    }

    return this.prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId: dto.productId,
        quantity: dto.quantity,
      },
    });
  }

  async removeItem(userId: string, productId: number) {
    const cart = await this.prisma.cart.findFirst({ where: { userId } });
    if (!cart) throw new NotFoundException('Cart not found');

    const item = await this.prisma.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productId: Number(productId),
      },
    });

    if (!item) throw new NotFoundException('Item not found in cart');

    return this.prisma.cartItem.delete({ where: { id: item.id } });
  }

  async getTotal(userId: string) {
    const cart = await this.prisma.cart.findFirst({ where: { userId }, include: {
      items: { include: { product: true } },
    } });

    if (!cart) return { total: 0 };

    const total = cart.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    );

    return { total };
  }

  async getItems(userId: string) {
    const cart = await this.prisma.cart.findFirst({
      where: { userId },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!cart) return [];
    return cart.items;
  }
}
