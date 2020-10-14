import { EntityRepository, Repository } from "typeorm";
import Sectors from "../models/Sectors";

interface Request {
  sector_name: string;
}

@EntityRepository(Sectors)
class SectorsRepository extends Repository<Sectors>{
  public async findBySector({sector_name}: Request): Promise<Sectors | null>{
    const findStatus = await this.findOne({
      where: { sector_name}
    });

    if(findStatus) {
      throw new Error("Setor já Cadastrado");
    }

    return findStatus || null;
  }
}

export default SectorsRepository