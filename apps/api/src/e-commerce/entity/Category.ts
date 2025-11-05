import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product';

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
