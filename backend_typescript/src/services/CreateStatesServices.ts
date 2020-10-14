import { getCustomRepository } from "typeorm";
import States from "../models/States";
import StatesRepository from "../repositories/StatesRepository";

interface Request {
  state_name: string;
}

class CreateStatesServices {
  public async execute({state_name}:Request): Promise<States>{
    const statesRepository = getCustomRepository(StatesRepository);
    const findStates = await statesRepository.findByStates({state_name});

    if (findStates) {
      throw new Error("Estado já cadastrado");
    }

    const state = statesRepository.create({state_name});
    await statesRepository.save(state);

    return state;
  }
}

export default CreateStatesServices;