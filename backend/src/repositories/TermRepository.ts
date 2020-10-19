import { 
  EntityRepository, 
  Repository 
} from "typeorm";
import Term from "../models/Term";

interface Request {
  term_name: string;
  equipments_id: string;
}

@EntityRepository(Term)
class TermRepository extends Repository<Term> {
  public async findByTermResponsibilityExist({term_name, equipments_id}: Request): Promise<Term | null>{
    const findTermResponsibility = await this.createQueryBuilder('terms')
    .select()
    .where("terms.term_name = :term_name", { term_name: 'Termo de Responsabilidade' })
    .where("terms.equipments_id = :equipments_id", { equipments_id })
    .getOne();

    if(findTermResponsibility) {
      throw new Error("Equipamento já ");
    }
    
    return findTermResponsibility || null;
  }

  public async findByTermDevolutionExist({term_name, equipments_id}: Request): Promise<Term | null>{
    const findTermDevolution = await this.createQueryBuilder('terms')
    .where("terms.term_name = :term_name", { term_name: 'Termo de Devolução' })
    .where("terms.equipments_id = :equipments_id", { equipments_id })
    .getOne();

    if(findTermDevolution) {
      throw new Error(`Equipamento`);
    }
    
    return findTermDevolution || null;
  }
}

export default TermRepository;