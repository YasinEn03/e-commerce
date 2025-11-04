import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 200 })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ default: true })
  isActive!: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @OneToMany(() => ProductVariant, (v) => v.product)
  variants!: ProductVariant[];

  @OneToMany(() => ProductImage, (i) => i.product)
  images!: ProductImage[];
}
