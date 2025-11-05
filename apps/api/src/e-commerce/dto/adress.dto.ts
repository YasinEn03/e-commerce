import { IsString, Length } from 'class-validator';

export class AddressDto {
  @IsString() @Length(1, 120) line1!: string;
  @IsString() @Length(1, 60) city!: string;
  @IsString() @Length(2, 2) countryCode!: string; // ISO-3166-1 alpha-2
  @IsString() @Length(1, 16) zip!: string;
}
