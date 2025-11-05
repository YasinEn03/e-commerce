import { IsInt, IsNumberString, IsOptional, IsString, Length, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @Length(1, 200)
  title!: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumberString()
  price!: number;

  @IsInt()
  @Min(0)
  stock!: number;
}
