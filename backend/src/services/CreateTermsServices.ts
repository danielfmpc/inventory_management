import { getRepository, Repository } from "typeorm";
import Term from "../models/Term";

interface Request {
  term_name: string;
  equipments_id: string;
  users_id: string;
}

class CreateTermsServices {
  public async execute({term_name, equipments_id, users_id}: Request): Promise<Term>{
    const termsRepository = getRepository(Term);
    
    // const findExistsTermEquipment = await termsRepository.findOne({
    //   where: {equipments_id}
    // });

    // if(findExistsTermEquipment) {
    //   throw new Error("Equipamento já cadastrado");
    // }

    const term = termsRepository.create({
      term_name,
      equipments_id,
      users_id
    });

    await termsRepository.save(term);

    return term;
  }
}

export default CreateTermsServices;