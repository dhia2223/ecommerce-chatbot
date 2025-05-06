import {
    Controller,
    Post,
    Get,
    Patch,
    Param,
    Body,
    Req,
    ForbiddenException,
    UseGuards,
  } from '@nestjs/common';
  import { OrderService } from './order.service';
  import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
  import { CreateOrderDto } from './dto/create-order.dto';
  import { UpdateStatusDto } from './dto/update-status.dto';
  import { Roles } from '../auth/decorators/roles.decorator';
  import { Role } from '@prisma/client';
//import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
  
  @ApiTags('Orders')
  @ApiBearerAuth()
  @Controller('orders')
  export class OrderController {
    constructor(private readonly orderService: OrderService) {}
  
    @UseGuards(JwtAuthGuard)
    @Roles('USER')
    @Post()
    @ApiOperation({ summary: 'Create order from cart (Checkout)' })
    async createOrder(@Req() req: any) {
      return this.orderService.createOrder(req.user.userId);
    }


    @UseGuards(JwtAuthGuard)
    @Roles('USER')
    @Get('my-orders')
    @ApiOperation({ summary: 'Get all orders of logged-in user' })
    async getMyOrders(@Req() req: any) {
      return this.orderService.getOrdersByUser(req.user.userId);
    }
  
    @Get()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    @ApiOperation({ summary: 'Get all orders (Admin only)' })
    async getAllOrders() {
      return this.orderService.getAllOrders();
    }
  
    @Patch(':id/status')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN') 
    @ApiOperation({ summary: 'Update order status (Admin only)' })
    async updateOrderStatus(
      @Param('id') id: string,
      @Body() dto: UpdateStatusDto,
    ) {
      return this.orderService.updateOrderStatus(id, dto.status);
    }
  }
  