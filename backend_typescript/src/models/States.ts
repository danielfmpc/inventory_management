import { 
  Column,
  CreateDateColumn, 
  Entity, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from "typeorm";

@Entity('states')
class States {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  states_name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default States;