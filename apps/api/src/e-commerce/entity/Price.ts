import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductVariant } from './ProductVariant';

@Entity('prices')
@Index(['variant', 'currency'], { unique: true })
export class Price {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => ProductVariant, (v) => v.prices, { onDelete: 'CASCADE' })
  variant!: ProductVariant;

  @Column({ length: 3 })
  currency!: string;

  @Column({ type: 'numeric', precision: 10, scale: 2, default: '0.00' })
  amount!: number;
}
