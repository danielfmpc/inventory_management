import { parseISO } from "date-fns";
import { getCustomRepository } from "typeorm";
import Status from "../models/Status";
import StatusRepository from "../repositories/StatusRepository";

interface Request {
  status_name: string;
  status: boolean;
  // created_at?: string;
  // updated_at?: string;
}

class CreateStatusServices {
  public async execute({status_name, status}: Request): Promise<Status>{
    const statusRepository = getCustomRepository(StatusRepository);
    
    // const updatedDateParsed = parseISO(updated_at);
    // const createdDateParsed = parseISO(created_at);



    const findStatus = await statusRepository.findByStatus(status_name);
    // const formattedUpdatedDate = await statusRepository.formattedDate(updatedDateParsed);
    // const formattedCreatedDate = await statusRepository.formattedDate(createdDateParsed);

    if(findStatus){
      throw new Error("Status já cadastrado");
    }

    const statusCreate = statusRepository.create({
      status_name,
      status,
      // created_at: formattedUpdatedDate,
      // updated_at:formattedCreatedDate
    });
    await statusRepository.save(statusCreate);

    return statusCreate;
  }
}

export default CreateStatusServices;