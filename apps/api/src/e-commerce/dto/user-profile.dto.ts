import { Expose, Transform, Type } from 'class-transformer';
import { IsDate, IsEmail, IsInt, IsOptional, IsString, Length, Min } from 'class-validator';

export class UserProfileDto {
  @Expose()
  @IsString()
  id!: string;

  @Expose()
  @IsString()
  @Length(1, 60)
  username!: string;

  @Expose()
  @IsString()
  @Length(1, 80)
  @IsOptional()
  firstname!: string;

  @Expose()
  @IsString()
  @Length(1, 80)
  lastname!: string;

  @Expose()
  @IsEmail()
  @Length(3, 254)
  email!: string;

  @Expose()
  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @Expose()
  @Type(() => Date)
  @IsDate()
  dateOfBirth!: Date;

  @Expose()
  @IsInt()
  @Min(0)
  salesCount!: number;

  @Expose()
  @Transform(({ value }) => Number(value))
  @IsString()
  earnings!: string;
}
