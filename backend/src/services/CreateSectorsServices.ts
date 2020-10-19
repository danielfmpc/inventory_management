import { getCustomRepository } from "typeorm";
import Sector from "../models/Sector";
import SectorsRepository from "../repositories/SectorsRepository";

interface Request {
  sector_name: string;
}

class CreateSectorsServices {
  public async execute({sector_name}:Request): Promise<Sector>{
    const sectorsRepository = getCustomRepository(SectorsRepository);
    const findSector = await sectorsRepository.findBySector({sector_name});

    if (findSector) {
      throw new Error("Setor já cadastrado");
    }

    const sector = sectorsRepository.create({sector_name});
    await sectorsRepository.save(sector);

    return sector;
  }
}

export default CreateSectorsServices;