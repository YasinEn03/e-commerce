import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductVariant } from './ProductVariant';
import { Warehouse } from './warehouse';

@Entity('inventory')
@Index(['variants', 'warehouse'], { unique: true })
export class Inventory {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => ProductVariant, { onDelete: 'CASCADE' })
  variants!: ProductVariant;

  @ManyToOne(() => Warehouse, { onDelete: 'CASCADE' })
  warehouse!: Warehouse;

  @Column({ type: 'int', default: 0 })
  quantity!: number;

  @Column({ type: 'int', default: 0 })
  reserved!: number;
}
