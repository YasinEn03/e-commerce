import { Expose, Transform, Type } from 'class-transformer';
import { IsEnum, IsOptional, IsString, Length } from 'class-validator';
import { Order } from '../entity/Order';
import { OrdersDto } from './order/order.dto';

type providerType = 'stripe' | 'paypal' | 'manual' | 'other';
type statusType = 'authorized' | 'captured' | 'failed' | 'refunded';

export class PaymentDto {
  @Expose()
  @IsString()
  id!: string;

  @Expose()
  @Type(() => OrdersDto)
  order: Order;

  @Expose()
  @Length(5, 20)
  @IsEnum(['stripe', 'paypal', 'manual', 'other'])
  provider: providerType;

  @Expose()
  @Length(6, 16)
  @IsEnum(['authorized', 'captured', 'failed', 'refunded'])
  status: statusType;

  @Expose()
  @Transform(({ value }) => Number(value))
  @IsString()
  amount: string;

  @Expose()
  @IsString()
  @Length(3)
  currency: string;

  @Expose()
  @IsString()
  @IsOptional()
  transactionId?: string;
}
