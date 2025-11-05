import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserProfile {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Index({ unique: true })
  @Column({ length: 60 })
  username!: string;

  @Column({ length: 80 })
  firstname: string;

  @Column({ length: 80 })
  lastname!: string;

  @Index({ unique: true })
  @Column({ length: 254, unique: true })
  email!: string;

  @Column({ nullable: true, length: 32 })
  phoneNumber?: string | null;

  @Column({ type: 'date' })
  dateOfBirth!: Date;

  @Column({ type: 'int', default: 0 })
  salesCount?: number;

  @Column({ type: 'numeric', precision: 12, scale: 2, default: 0 })
  earnings?: string;
}
