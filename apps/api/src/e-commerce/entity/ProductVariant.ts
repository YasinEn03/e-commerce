import { Column, Entity, Index, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './Product.js';
import { Price } from './Price.js';

@Entity('product_variants')
@Index(['sku'], { unique: true })
export class ProductVariant {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Product, (p) => p.variants, { onDelete: 'CASCADE' })
  product!: Product;

  @Column({ length: 64 })
  sku!: string;

  @Column({ length: 64, nullable: true })
  barcode?: string;

  @Column({ default: true })
  isActive!: boolean;

  @Column({ type: 'numeric', precision: 10, scale: 2, default: '0.00' })
  compareAtPrice!: number;

  @OneToMany(() => Price, (pr) => pr.variant)
  prices!: Price[];
}
