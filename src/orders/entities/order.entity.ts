import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dateorder: Date;

  @Column()
  totalorder: number;

  @Column()
  quantity: number;
}
