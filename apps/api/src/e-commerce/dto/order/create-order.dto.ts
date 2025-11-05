import { Type } from 'class-transformer';
import { IsArray, IsInt, IsUUID, Min, ValidateNested } from 'class-validator';
import { AddressDto } from '../adress.dto';

export class OrderItemDto {
  @IsUUID()
  variantId!: string;

  @IsInt()
  @Min(1)
  quantity!: number;
}

export class CreateOrderDto {
  @ValidateNested()
  @Type(() => AddressDto)
  billing!: AddressDto;

  @ValidateNested()
  @Type(() => AddressDto)
  shipping!: AddressDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items!: OrderItemDto[];
}
