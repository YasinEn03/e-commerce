import { Expose, Type } from 'class-transformer';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { OrdersDto } from './order/order.dto';

type statusType = 'pending' | 'shipped' | 'delivered' | 'returned';

export class ShipmentDto {
  @Expose()
  @IsString()
  id!: string;

  @Expose()
  @Type(() => OrdersDto)
  order!: OrdersDto;

  @Expose()
  @IsOptional()
  @IsString()
  trackingNo?: string;

  @Expose()
  @IsString()
  carrier!: string;

  @Expose()
  @IsEnum(['pending', 'shipped', 'delivered', 'returned'])
  status!: statusType;

  @Expose()
  @IsOptional()
  @Type(() => Date)
  shippedAt?: Date;

  @Expose()
  @IsOptional()
  @Type(() => Date)
  deliveredAt?: Date;
}
