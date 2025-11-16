import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from './product';
import { ProductImage } from './product-image';
import { Price } from './Price';

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

  @OneToMany(() => ProductImage, (img) => img.productVariant)
  images!: ProductImage[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
