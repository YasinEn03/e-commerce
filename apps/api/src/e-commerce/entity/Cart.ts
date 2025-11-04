import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserProfile } from './UserProfile';
import { CartItem } from './CartItem';

@Entity('carts')
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => UserProfile, { nullable: true })
  user?: UserProfile;

  @Column({ length: 3 })
  currency!: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  totalNet!: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  totalGross!: number;

  @OneToMany(() => CartItem, (item) => item.cart, { cascade: true })
  items!: CartItem[];
}
