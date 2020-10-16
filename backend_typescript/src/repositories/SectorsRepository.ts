import { EntityRepository, Repository } from "typeorm";
import Sector from "../models/Sector";

interface Request {
  sector_name: string;
}

@EntityRepository(Sector)
class SectorsRepository extends Repository<Sector>{
  public async findBySector({sector_name}: Request): Promise<Sector | null>{
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