import { getCustomRepository } from "typeorm";
import Situation from "../models/Situation";
import SituationsRepository from "../repositories/SituationsRepository";

interface Request {
  situation_name: string;
}

class CreateSituationsServices {
  public async execute({situation_name}:Request): Promise<Situation>{
    const situationsRepository = getCustomRepository(SituationsRepository);
    const findSituation = await situationsRepository.findBySituation({situation_name});

    if (findSituation) {
      throw new Error("Situação já cadastrado");
    }

    const situtaion = situationsRepository.create({situation_name});
    await situationsRepository.save(situtaion);

    return situtaion;
  }
}

export default CreateSituationsServices;