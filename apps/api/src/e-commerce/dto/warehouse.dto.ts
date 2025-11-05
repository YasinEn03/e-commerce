import { Expose } from 'class-transformer';
import { IsString, Length } from 'class-validator';

export class WarehouseDto {
  @Expose()
  @IsString()
  id!: string;

  @Expose()
  @IsString()
  @Length(1, 120)
  name!: string;
}
