import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 16 })
  type!: 'billing' | 'shipping';

  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column({ length: 16 })
  postalCode: string;

  @Column()
  country: string;

  @Column({ length: 2 })
  countryCode: string;

  @Column({ default: false })
  isDefault!: boolean;
}
