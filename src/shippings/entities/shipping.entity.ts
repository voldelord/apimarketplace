import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Shipping {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  dateshipping: Date;

  @Column()
  total: number;
}
