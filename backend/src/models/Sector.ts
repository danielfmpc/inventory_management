import { 
  Column,
  CreateDateColumn, 
  Entity, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from "typeorm";
import User from "./User";

@Entity('sectors')
class Sector {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  sector_name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Sector;