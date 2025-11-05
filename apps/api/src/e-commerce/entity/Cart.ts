import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CartItem } from './cart-item';
import { UserProfile } from './user-profile';

@Entity('carts')
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => UserProfile, { nullable: true })
  user?: UserProfile | null;

  @Column({ length: 3 })
  currency!: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  totalNet!: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  totalGross!: string;

  @OneToMany(() => CartItem, (item) => item.cart, { cascade: true })
  items!: CartItem[];
}
