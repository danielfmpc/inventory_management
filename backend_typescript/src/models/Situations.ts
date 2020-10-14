import { 
  Column,
  CreateDateColumn, 
  Entity, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from "typeorm";

@Entity('situations')
class Situations {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  situation_name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Situations;