import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Query } from '@nestjs/common';
import { PagianationDto } from '../dto/pagination.dto';
import { CreateProductDto } from '../dto/product/create-product.dto';
import { ProductService } from '../service/product.service';
import { UpdateProductDto } from '../dto/product/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly service: ProductService) {}

  @Get()
  findAll(@Query() q: PagianationDto) {
    return this.service.findAll(q);
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.service.create(dto);
  }

  @Patch(':id')
  update(@Param('id', new ParseUUIDPipe()) id: string, @Body() dto: UpdateProductDto) {
    return this.service.update(id, dto);
  }
}
