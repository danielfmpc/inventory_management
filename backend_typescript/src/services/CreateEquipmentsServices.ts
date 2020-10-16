import { getRepository, Repository } from "typeorm";
import Branch from "../models/Branch";
import Equipment from "../models/Equipment";

interface Request {
  equipment_name: string;
  description: string;
  patrimony: string;
  brands_id: string;
  situations_id: string;
  branchs_id: string;
  sectors_id: string;
}

class CreateEquipmentsServices extends Repository<Equipment>{
  public async execute({
    patrimony,
    description,
    branchs_id,
    brands_id,
    equipment_name,
    sectors_id,
    situations_id
  }:Request) : Promise<Equipment>{
    const equipmentsRepository = getRepository(Equipment);

    const findExist = await equipmentsRepository.findOne({
      where: {patrimony}
    });

    if(findExist) {
      throw new Error("Filial já cadastrada");
    }

    const equipments = equipmentsRepository.create({
      patrimony,
      description,
      branchs_id,
      brands_id,
      equipment_name,
      sectors_id,
      situations_id
    });
    await equipmentsRepository.save(equipments);
    return equipments;
  }
}

export default CreateEquipmentsServices;