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
  } from '@nestjs/common';
  import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
  import { ProductsService } from './products.service';
  import { CreateProductDto } from './dto/create-product.dto';
  import { UpdateProductDto } from './dto/update-product.dto';
  import { JwtAuthGuard } from '../auth/jwt-auth.guard';
  
  @ApiTags('Products')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Controller('products')
  export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}
  
    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @ApiOperation({ summary: 'Create a new product' })
    create(@Body() dto: CreateProductDto) {
      return this.productsService.create(dto);
    }
  
    @Get()
    @ApiOperation({ summary: 'Get all products' })
    findAll() {
      return this.productsService.findAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Get product by id' })
    findOne(@Param('id') id: string) {
      return this.productsService.findOne(+id);
    }
  
    @Patch(':id')
    @ApiOperation({ summary: 'Update product by id' })
    update(@Param('id') id: string, @Body() dto: UpdateProductDto) {
      return this.productsService.update(+id, dto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Delete product by id' })
    remove(@Param('id') id: string) {
      return this.productsService.remove(+id);
    }
  }
  