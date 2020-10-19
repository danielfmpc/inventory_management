import { 
  Column, 
  CreateDateColumn, 
  Entity, 
  JoinColumn, 
  ManyToOne, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from "typeorm";
import Branch from "./Branch";
import Permissions_Users from "./Permissions_Users";
import Sector from "./Sector";
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

  @ManyToOne(()=> Status, {eager: true})
  @JoinColumn({name: 'status_id'})
  status: Status;

  @Column()
  branchs_id: string;

  @ManyToOne(()=> Branch, {eager: true})
  @JoinColumn({name: 'branchs_id'})
  branch: Branch;
  
  @Column()
  sectors_id: string;

  @ManyToOne(()=> Sector, {eager: true})
  @JoinColumn({name: 'sectors_id'})
  sector: Sector;

  @Column()
  permissions_users_id: string;

  @ManyToOne(()=> Permissions_Users, {eager: true, })
  @JoinColumn({name: 'permissions_users_id'})
  permissions: Permissions_Users;


  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export default User;