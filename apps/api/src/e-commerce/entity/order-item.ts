import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order';
import { ProductVariant } from './product-variant';

@Entity('order_items')
export class OrderItem {
  @PrimaryGeneratedColumn('uuid') id!: string;

  @ManyToOne(() => Order, (o) => o.items, { onDelete: 'CASCADE' })
  order!: Order;

  @ManyToOne(() => ProductVariant, { nullable: true })
  variant?: ProductVariant;

  @Column()
  titleSnapshot!: string;

  @Column({ length: 64 })
  skuSnapshot!: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  unitPrice!: string;

  @Column({ type: 'int' })
  quantity!: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  lineTotal!: string;
}
