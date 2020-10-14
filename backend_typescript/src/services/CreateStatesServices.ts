import { getCustomRepository } from "typeorm";
import States from "../models/States";
import StatesRepository from "../repositories/StatesRepository";

interface Request {
  states_name: string;
}

class CreateStatesServices {
  public async execute({states_name}:Request): Promise<States>{
    const statesRepository = getCustomRepository(StatesRepository);
    const findStates = await statesRepository.findByStates({states_name});

    if (findStates) {
      throw new Error("Estado já cadastrado");
    }

    const state = statesRepository.create({states_name});
    await statesRepository.save(state);

    return state;
  }
}

export default CreateStatesServices;