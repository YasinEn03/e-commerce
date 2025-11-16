import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order';

@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn('uuid') id!: string;

  @ManyToOne(() => Order, (o) => o.payments, { onDelete: 'CASCADE' })
  order!: Order;

  @Column({ length: 20 })
  provider!: 'stripe' | 'paypal' | 'manual' | 'other';

  @Column({ length: 16 })
  status!: 'authorized' | 'captured' | 'failed' | 'refunded';

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  amount!: string;

  @Column({ length: 3 })
  currency!: string;

  @Column({ nullable: true })
  transactionId?: string;
}
