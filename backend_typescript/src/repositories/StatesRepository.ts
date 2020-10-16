import { EntityRepository, Repository } from "typeorm";
import State from "../models/State";

interface Request {
  state_name: string;
}

@EntityRepository(State)
class StatesRepository extends Repository<State>{
  public async findByStates({state_name}: Request): Promise<State | null>{
    const findStatus = await this.findOne({
      where: { state_name}
    });

    if(findStatus) {
      throw new Error("Estado Já Cadastrado");
    }

    return findStatus || null;
  }
}

export default StatesRepository