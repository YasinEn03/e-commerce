import { Expose, Transform, Type } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, IsString, Matches, ValidateNested } from 'class-validator';
import { UserProfileDto } from './user-Profile.dto';
import { CartItemDto } from './cart-item.dto';

export class CartDto {
  @Expose()
  @IsString()
  id!: string;

  @Expose()
  @Type(() => UserProfileDto)
  @IsOptional()
  userId?: UserProfileDto;

  @Expose()
  @Transform(({ value }) => (typeof value === 'string' ? value.toUpperCase() : value))
  @Matches(/^[A-Z]{3}$/)
  @IsString()
  currency!: string;

  @Expose()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  totalNet!: number;

  @Expose()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  totalGross!: number;

  @Expose()
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => CartItemDto)
  items!: CartItemDto[];
}
