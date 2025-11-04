import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Product } from './Product';

@Entity('Category')
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column({ nullable: true })
  description: string | null;

  @Column()
  parent?: Category;

  @Column()
  children?: Category[];

  @Column()
  products!: Product[];

  @Column({ type: 'text', default: '' })
  path!: string;
}
