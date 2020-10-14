import { 
  Column,
  CreateDateColumn, 
  Entity, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from "typeorm";

@Entity('sectors')
class Sectors {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  sector_name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Sectors;