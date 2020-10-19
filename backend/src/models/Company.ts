import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Status from "./Status";

@Entity('companys')
class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  company_name: string;

  @Column()
  cnpj: string;

  @Column()
  status_id: string;

  @ManyToOne(()=> Status, {eager:true})
  @JoinColumn({name: 'status_id'})
  status: Status;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Company;