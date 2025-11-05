import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product';
import { ProductVariant } from './product-variant';

@Entity('product_image')
export class ProductImage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Product, (product) => product.images, { nullable: false })
  product: Product;

  @Column({ type: 'text' })
  url: string;

  @Column({ type: 'text', nullable: true })
  alt: string;

  @Column({ type: 'int', default: 0 })
  position: number;

  @ManyToOne(() => ProductVariant, (variant) => variant.images, { nullable: true })
  productVariant?: ProductVariant;
}
