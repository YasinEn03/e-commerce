import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserProfile } from './user-profile';
import { OrderItem } from './order-item';
import { Payment } from './Payment';
import { Shipment } from './Shipment';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserProfile, { nullable: false, onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'userId' })
  user?: UserProfile;

  @Index({ unique: true })
  @Column({ length: 24 })
  number!: string;

  @Column({ length: 20 })
  status!: 'pending' | 'paid' | 'shipped' | 'refunded' | 'cancelled';

  @Column({ type: 'jsonb' })
  billingAddress!: Record<string, any>;

  @Column({ type: 'jsonb' })
  shippingAddress!: Record<string, any>;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  subTotal!: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  taxTotal!: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  shippingTotal!: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  grandTotal!: string;

  @CreateDateColumn()
  placedAt!: Date;

  @OneToMany(() => OrderItem, (item) => item.order, { cascade: true })
  items!: OrderItem[];

  @OneToMany(() => Payment, (payment) => payment.order, { cascade: true })
  payments!: Payment[];

  @OneToMany(() => Shipment, (shipment) => shipment.order, { cascade: true })
  shipments!: Shipment[];
}
