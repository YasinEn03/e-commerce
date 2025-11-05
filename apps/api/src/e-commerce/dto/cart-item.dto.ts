import { Expose, Transform, Type } from 'class-transformer';
import { IsInt, IsNumber, IsOptional, IsString, IsUUID, Min } from 'class-validator';
import { ProductVariantDto } from './product/productVariant.dto';

export class CartItemDto {
  @Expose()
  @IsString()
  id!: string;

  @Expose()
  @IsOptional()
  @IsUUID()
  cartId?: string;

  @Expose()
  @Type(() => ProductVariantDto)
  variant!: ProductVariantDto;

  @Expose()
  @IsInt()
  @Min(1)
  quantity!: number;

  @Expose()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  unitPrice!: string;

  @Expose()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  lineTotal!: string;
}
