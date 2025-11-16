import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Cart } from './cart';
import { ProductVariant } from './product-variant';

@Entity('cart_items')
@Index(['cart', 'variant'], { unique: true })
export class CartItem {
  @PrimaryGeneratedColumn('uuid') id!: string;

  @ManyToOne(() => Cart, (c) => c.items, { onDelete: 'CASCADE' })
  cart!: Cart;

  @ManyToOne(() => ProductVariant, { eager: true })
  variant!: ProductVariant;

  @Column({ type: 'int' })
  quantity!: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  unitPrice!: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  lineTotal!: string;
}
