import { Expose, Type } from 'class-transformer';
import { IsBoolean, IsDate, IsInt, IsOptional, IsString, Length } from 'class-validator';
import { ProductImageDto } from './productImage.dto';

export class ProductVariantDto {
  @Expose()
  @IsString()
  id!: string;

  @Expose()
  @IsString()
  @Length(1, 64)
  sku!: string;

  @Expose()
  @IsString()
  @IsOptional()
  barcode?: string;

  @Expose()
  @IsBoolean()
  isActive!: boolean;

  @Expose()
  @IsInt()
  compareAtPrice!: number;

  @Expose()
  @Type(() => ProductImageDto)
  images?: ProductImageDto[];

  @Expose()
  @IsDate()
  createdAt!: Date;

  @Expose()
  @IsDate()
  updatedAt!: Date;
}
