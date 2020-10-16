import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('branchs')
class Branch {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  branch_name: string;

  @Column()
  states_id: string;

  @Column()
  status_id: string;

  @Column()
  companys_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Branch;