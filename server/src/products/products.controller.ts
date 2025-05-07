import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Patch,
    Delete,
    UseGuards,
    UseInterceptors,
    Req,
    UploadedFiles} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
  //

import { v4 as uuidv4 } from 'uuid';
import { diskStorage } from 'multer';
import { FilesInterceptor } from '@nestjs/platform-express';
import * as path from 'path';
import { Request } from 'express';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';


@ApiTags('Products')
// @ApiBearerAuth()
// @UseGuards(JwtAuthGuard)
@Controller('products')
export class ProductsController {
  //
  constructor(
    private readonly productsService: ProductsService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN') 
  @ApiBearerAuth() // Swagger support for JWT
  @ApiOperation({ summary: 'Create a new product' })
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }
  //

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
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN') 
  @ApiOperation({ summary: 'Update product by id' })
  update(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return this.productsService.update(+id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN') 
  @ApiOperation({ summary: 'Delete product by id' })
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
  //
  // @Post('upload')
  // @UseInterceptors(FileInterceptor('image', {
  //   storage: diskStorage({
  //     destination: './assets/products',
  //     filename: (req, file, cb) => {
  //       const ext = path.extname(file.originalname);
  //       const filename = `${uuidv4()}${ext}`;
  //       cb(null, filename);
  //     },
  //   }),
  // }))
  // uploadFile(@UploadedFile() file: Express.Multer.File, @Req() req: Request) {
  //   const imageUrl = `${req.protocol}://${req.get('host')}/assets/products/${file.filename}`;
  //   return { imageUrl };
  // }
  @Post('upload')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN') 
  @UseInterceptors(FilesInterceptor('images', 10, {  // allow up to 10 files
    storage: diskStorage({
      destination: './assets/products',
      filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const filename = `${uuidv4()}${ext}`;
        cb(null, filename);
      },
    }),
  }))
  uploadMultipleFiles(@UploadedFiles() files: Express.Multer.File[], @Req() req: Request) {
    const images = files.map(file => `${req.protocol}://${req.get('host')}/assets/products/${file.filename}`);
    return { images }; // return array of uploaded image URLs
  }
}
