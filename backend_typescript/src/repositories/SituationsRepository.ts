import { EntityRepository, Repository } from "typeorm";
import Situations from "../models/situations";

interface Request {
  situation_name: string;
}

@EntityRepository(Situations)
class SituationsRepository extends Repository<Situations>{
  public async findBySituation({situation_name}: Request): Promise<Situations | null>{
    const findStatus = await this.findOne({
      where: { situation_name}
    });

    if(findStatus) {
      throw new Error("Situação já Cadastrada");
    }

    return findStatus || null;
  }
}

export default SituationsRepository