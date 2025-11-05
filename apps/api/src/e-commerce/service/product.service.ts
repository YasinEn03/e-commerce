import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PagianationDto } from '../dto/pagination.dto';
import { CreateProductDto } from '../dto/product/create-product.dto';
import { UpdateProductDto } from '../dto/product/update-product.dto';
import { Product } from '../entity/product';

export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly repo: Repository<Product>,
  ) {}

  async findAll(q: PagianationDto) {
    const page = q.page ?? 1;
    const limit = q.limit ?? 20;

    const [items, total] = await this.repo.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: { createdAt: 'DESC' },
    });

    return {
      total,
      page,
      limit,
      items,
    };
  }

  async findOne(id: string) {
    return this.repo.findOneBy({ id });
  }

  async create(dto: CreateProductDto) {
    const product = this.repo.create(dto);
    return this.repo.save(product);
  }

  async update(id: string, dto: UpdateProductDto) {
    const existing = await this.findOne(id);
    const updated = Object.assign(existing!, dto);
    return this.repo.save(updated);
  }

  async remove(id: string) {
    const existing = await this.findOne(id);
    await this.repo.remove(existing!);
    return { success: true };
  }
}
