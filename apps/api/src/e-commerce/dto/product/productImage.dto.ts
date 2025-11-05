import { Expose } from 'class-transformer';
import { IsInt, IsOptional, IsString, IsUrl, Length, Min } from 'class-validator';

export class ProductImageDto {
  @Expose()
  @IsString()
  id: string;

  @Expose()
  @IsUrl()
  @Length(1, 255)
  url: string;

  @Expose()
  @IsString()
  @IsOptional()
  alt?: string;

  @Expose()
  @IsInt()
  @Min(0)
  position: number;
}
