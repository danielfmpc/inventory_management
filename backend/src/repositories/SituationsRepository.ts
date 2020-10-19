import { EntityRepository, Repository } from "typeorm";
import Situation from "../models/Situation";
interface Request {
  situation_name: string;
}

@EntityRepository(Situation)
class SituationsRepository extends Repository<Situation>{
  public async findBySituation({situation_name}: Request): Promise<Situation | null>{
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