import { Expose, Transform, Type } from 'class-transformer';
import { IsNumber, IsPositive, IsString, Matches } from 'class-validator';
import { ProductVariantDto } from './product/productVariant.dto';

export class PriceDTO {
  @Expose()
  @IsString()
  id!: string;

  @Expose()
  @Type(() => ProductVariantDto)
  variant!: ProductVariantDto;

  @Expose()
  @IsString()
  @Transform(({ value }) => (typeof value === 'string' ? value.toUpperCase() : value))
  @Matches(/^[A-Z]{3}$/)
  currency!: string;

  @Expose()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsPositive()
  amount!: number;
}
