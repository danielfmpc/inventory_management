import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Branch from "./Branch";
import Brand from "./Brand";
import Sector from "./Sector";
import Situation from "./Situation";

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
  
  @ManyToOne(()=> Brand, {eager: true})
  @JoinColumn({name: 'brands_id'})
  brand: Brand;

  @Column()
  situations_id: string;

  @ManyToOne(()=> Situation, {eager: true})
  @JoinColumn({name: 'situations_id'})
  situation: Situation;

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export default Equipment;