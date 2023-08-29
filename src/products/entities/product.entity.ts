import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: string;

  @Column()
  category: string;

  @Column()
  brand: string;

  @Column()
  image: string;

  @Column()
  quantityinstock: number;

  @Column()
  weight: number;

  @Column()
  dimensions: string;

  @Column()
  origincountry: string;

  @Column()
  status: number;
}
