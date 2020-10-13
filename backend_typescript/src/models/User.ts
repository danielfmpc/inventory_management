import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

  @Column()
  branchs_id: string;
  
  @Column()
  sectors_id: string;

  @Column()
  positons_id: string;


  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export default User;