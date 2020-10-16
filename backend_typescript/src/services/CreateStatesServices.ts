import { getCustomRepository } from "typeorm";
import State from "../models/State";
import StatesRepository from "../repositories/StatesRepository";

interface Request {
  state_name: string;
}

class CreateStatesServices {
  public async execute({state_name}:Request): Promise<State>{
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