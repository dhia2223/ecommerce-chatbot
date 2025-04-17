import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Patch,
    Delete,
    UseGuards,
    UsePipes,
    ValidationPipe,
    Req,
  } from '@nestjs/common';
  import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
  import { OrdersService } from './orders.service';
  import { CreateOrderDto } from './dto/create-order.dto';
  import { UpdateOrderDto } from './dto/update-order.dto';
  import { JwtAuthGuard } from '../auth/jwt-auth.guard';  // <-- use your custom guard
  
  @ApiTags('Orders')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Controller('orders')
  export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}
  
    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @ApiOperation({ summary: 'Create a new order for the logged-in user' })
    create(@Body() dto: CreateOrderDto, @Req() req) {
      // Extract the userId from the JWT payload
      const userId = req.user.userId;
      return this.ordersService.create(dto, userId);
    }
  
    @Get()
    @ApiOperation({ summary: 'Get all orders' })
    findAll() {
      return this.ordersService.findAll();
    }
  
    @Get('user/:userId')
    @ApiOperation({ summary: 'Get all orders by userId' })
    findByUser(@Param('userId') userId: string) {
      return this.ordersService.findByUser(userId);
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Get order by id' })
    findOne(@Param('id') id: string) {
      return this.ordersService.findOne(+id);
    }
  
    @Patch(':id')
    @ApiOperation({ summary: 'Update order by id' })
    update(@Param('id') id: string, @Body() dto: UpdateOrderDto) {
      return this.ordersService.update(+id, dto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Delete order by id' })
    remove(@Param('id') id: string) {
      return this.ordersService.remove(+id);
    }
  }
  