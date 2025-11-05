import {
  Check,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  VersionColumn,
} from 'typeorm';
import { ProductVariant } from './product-variant';
import { Warehouse } from './warehouse';

@Entity('inventory')
@Index(['variants', 'warehouse'], { unique: true })
@Check('"quantity" >= 0')
@Check('"reserved" >= 0')
@Check('"reserved" <= "quantity"')
export class Inventory {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => ProductVariant, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({ name: 'variant_id' })
  variants!: ProductVariant;

  @ManyToOne(() => Warehouse, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({ name: 'warehouse_id' })
  warehouse!: Warehouse;

  @Column({ type: 'int', default: 0 })
  quantity!: number;

  @Column({ type: 'int', default: 0 })
  reserved!: number;

  @VersionColumn()
  version!: number;
}
