import { 
  Column,
  CreateDateColumn, 
  Entity, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from "typeorm";

@Entity('permissions_users')
class Permissions_Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  permission_name: string;

  @Column()
  permission_code: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Permissions_Users;