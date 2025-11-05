import { Expose, Transform, Type } from 'class-transformer';
import { ProductImageDto } from './productImage.dto';
import { ProductVariantDto } from './productVariant.dto';

export class ProductDto {
  @Expose()
  id!: string;

  @Expose()
  title!: string;

  @Expose()
  description?: string;

  @Expose()
  @Transform(({ value }) => Number(value))
  price!: number;

  @Expose()
  stock!: number;

  @Expose()
  createdAt!: Date;

  @Expose()
  updatedAt!: Date;

  @Expose()
  @Type(() => ProductVariantDto)
  variants?: ProductVariantDto[];

  @Expose()
  @Type(() => ProductImageDto)
  images?: ProductImageDto[];
}
