import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  birthdate: Date;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  addres: string;

  @Column()
  codezip: number;

  @Column()
  phone: number;

  @DeleteDateColumn()
  deletedAt: Date;
}
