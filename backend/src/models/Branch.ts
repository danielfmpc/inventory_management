import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Company from "./Company";
import State from "./State";
import Status from "./Status";
import User from "./User";

@Entity('branchs')
class Branch {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  branch_name: string;

  @Column()
  states_id: string;

  @ManyToOne(()=> State, {eager:true})
  @JoinColumn({name: 'states_id'})
  state: State;

  @Column()
  status_id: string;

  @ManyToOne(()=> Status, {eager:true})
  @JoinColumn({name: 'status_id'})
  status: Status;

  @Column()
  companys_id: string;

  @ManyToOne(()=> Company, {eager:true})
  @JoinColumn({name: 'companys_id'})
  company: Company;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Branch;