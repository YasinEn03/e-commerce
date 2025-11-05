import { Expose, Transform, Type } from 'class-transformer';
import { IsInt, IsString, Min, ValidateNested } from 'class-validator';
import { ProductVariantDto } from './product/productVariant.dto';
import { WarehouseDto } from './warehouse.dto';

export class InventoryDto {
  @Expose()
  @IsString()
  id!: string;

  @Expose()
  @Type(() => ProductVariantDto)
  @ValidateNested()
  variants!: ProductVariantDto;

  @Expose()
  @Type(() => WarehouseDto)
  @ValidateNested()
  warehouse!: WarehouseDto;

  @Expose()
  @IsInt()
  @Min(0)
  quantity!: number;

  @Expose()
  @IsInt()
  @Min(0)
  reserved!: number;

  @Expose()
  @Transform(({ obj }) => Math.max(0, (obj.quantity ?? 0) - (obj.reserved ?? 0)))
  available!: number;
}
