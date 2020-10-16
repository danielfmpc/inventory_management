import { 
  Column, 
  CreateDateColumn, 
  Entity, 
  JoinColumn, 
  ManyToOne, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from "typeorm";
import Status from "./Status";

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  full_name: string;

  @Column()
  cpf: string;

  @Column('timestamp with time zone')
  birth: Date;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  status_id: string;

  @ManyToOne(()=> Status)
  @JoinColumn({name: 'status_id'})
  status: Status;

  @Column()
  branchs_id: string;
  
  @Column()
  sectors_id: string;

  @Column()
  permissions_users_id: string;


  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export default User;