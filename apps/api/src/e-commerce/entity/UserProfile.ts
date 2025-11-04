import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserProfile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  salesCount: number;

  @Column()
  earnings: number;
}
