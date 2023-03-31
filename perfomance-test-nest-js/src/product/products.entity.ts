import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product_categories } from './product_categories.entity';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product_categories)
  @JoinColumn({ name: 'product_category_id' })
  productCategory: Product_categories;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;
}
