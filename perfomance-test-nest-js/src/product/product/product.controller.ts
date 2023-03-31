import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {
  }

  @Get('getAll')
  getAll() {
    return this.productService.getAll();
  }

  @Get('getCategory')
  getCategory() {
    return this.productService.getCategory();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.productService.getOne(id);
  }
}
