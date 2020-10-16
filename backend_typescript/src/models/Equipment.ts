import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('equipments')
class Equipment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  equipment_name: string;
  
  @Column()
  description: string;
  
  @Column()
  patrimony: string;
  
  @Column()
  brands_id: string;

  @Column()
  situations_id: string;

  @Column()
  branchs_id: string;

  @Column()
  sectors_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export default Equipment;