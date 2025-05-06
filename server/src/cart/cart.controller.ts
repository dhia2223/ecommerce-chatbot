import {
    Controller,
    Get,
    Post,
    Delete,
    Body,
    Param,
    Query,
  } from '@nestjs/common';
  import { CartService } from './cart.service';
  import { ApiTags, ApiOperation, ApiBody, ApiQuery } from '@nestjs/swagger';
  import { AddItemDto } from './dto/add-cart-item.dto';
  
  @ApiTags('Cart')
  @Controller('cart')
  export class CartController {
    constructor(private readonly cartService: CartService) {}
  
    @Post('add')
    @ApiOperation({ summary: 'Add item to cart' })
    @ApiBody({ type: AddItemDto })
    addItem(@Body() dto: AddItemDto) {
      return this.cartService.addItem(dto);
    }
  
    @Delete('remove')
    @ApiOperation({ summary: 'Remove item from cart' })
    @ApiQuery({ name: 'userId', required: true })
    @ApiQuery({ name: 'productId', required: true, type: Number })
    removeItem(@Query('userId') userId: string, @Query('productId') productId: number) {
      return this.cartService.removeItem(userId, productId);
    }
  
    @Get('total')
    @ApiOperation({ summary: 'Get total cart value' })
    @ApiQuery({ name: 'userId', required: true })
    getTotal(@Query('userId') userId: string) {
      return this.cartService.getTotal(userId);
    }
  
    @Get('items')
    @ApiOperation({ summary: 'Get all cart items for user' })
    @ApiQuery({ name: 'userId', required: true })
    getItems(@Query('userId') userId: string) {
      return this.cartService.getItems(userId);
    }
  }