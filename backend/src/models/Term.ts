import { 
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn 
} from "typeorm";
import Equipment from "./Equipment";
import User from "./User";

@Entity('terms')
class Term{
  @PrimaryGeneratedColumn('uuid')
  id: String;

  @Column()
  term_name: string;

  @Column()
  equipments_id: string;

  @ManyToOne(()=> Equipment, {eager: true})
  @JoinColumn({name: 'equipments_id'})
  equipment: Equipment;

  @Column()
  users_id: string;

  @ManyToOne(()=> User, {eager: true})
  @JoinColumn({name: 'users_id'})
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Term;