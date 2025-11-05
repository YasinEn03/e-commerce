import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './Order';

@Entity('shipments')
export class Shipment {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Order, (o) => o.shipments, { onDelete: 'CASCADE' })
  order!: Order;

  @Column({ length: 40 })
  carrier!: string;

  @Column({ nullable: true })
  trackingNo?: string;

  @Column({ length: 16 })
  status!: 'pending' | 'shipped' | 'delivered' | 'returned';

  @Column({ type: 'timestamptz', nullable: true })
  shippedAt?: Date;

  @Column({ type: 'timestamptz', nullable: true })
  deliveredAt?: Date;
}
