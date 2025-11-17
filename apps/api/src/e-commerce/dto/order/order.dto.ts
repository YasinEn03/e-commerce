import { Expose, Transform, Type } from 'class-transformer';
import { IsEnum, IsNumber, IsObject, IsString } from 'class-validator';
import { PaymentDto } from '../payment.dto';
import { ShipmentDto } from '../shipment.dto';
import { UserProfileDto } from '../user-profile.dto';
import { OrderItemDto } from './create-order.dto';

type OrderStatus = 'pending' | 'paid' | 'shipped' | 'refunded' | 'cancelled';

export class OrdersDto {
  @Expose()
  @IsString()
  id!: string;

  @Expose()
  @IsString()
  number!: string;

  @Expose()
  @IsEnum(['pending', 'paid', 'shipped', 'refunded', 'cancelled'])
  status!: OrderStatus;

  @Expose()
  @IsObject()
  billingAddress!: Record<string, any>;

  @Expose()
  @IsObject()
  shippingAddress!: Record<string, any>;

  @Expose()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  subTotal!: number;

  @Expose()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  taxTotal!: number;

  @Expose()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  shippingTotal!: number;

  @Expose()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  grandTotal!: number;

  @Expose()
  placedAt!: Date;

  @Expose()
  @Type(() => OrderItemDto)
  items!: OrderItemDto[];

  @Expose()
  @Type(() => PaymentDto)
  payments!: PaymentDto[];

  @Expose()
  @Type(() => ShipmentDto)
  shipments!: ShipmentDto[];

  @Expose()
  @Type(() => UserProfileDto)
  user?: UserProfileDto;
}
