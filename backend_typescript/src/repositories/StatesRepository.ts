import { EntityRepository, Repository } from "typeorm";
import States from "../models/States";

interface Request {
  states_name: string;
}

@EntityRepository(States)
class StatesRepository extends Repository<States>{
  public async findByStates({states_name}: Request): Promise<States | null>{
    const findStatus = await this.findOne({
      where: { states_name}
    });

    if(findStatus) {
      throw new Error("Estado Já Cadastrado");
    }

    return findStatus || null;
  }
}

export default StatesRepository