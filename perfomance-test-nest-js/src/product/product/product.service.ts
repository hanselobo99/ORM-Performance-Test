import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Product_categories } from '../product_categories.entity';
import { Products } from '../products.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product_categories)
    private productCategoryRepository: Repository<Product_categories>,
    @InjectRepository(Products)
    private productRepository: Repository<Products>,
  ) {
  }

  getAll() {
    return this.productRepository.find();
  }

  getOne(id: number) {
    return this.productRepository.findOne({ where: { id: id } });
  }

  async getCategory() {
    const myItem = await this.productCategoryRepository.find({
      relations: { products: true },
    });
    return myItem;
  }
}
