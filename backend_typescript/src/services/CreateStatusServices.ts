import { getCustomRepository } from "typeorm";
import Status from "../models/Status";
import StatusRepository from "../repositories/StatusRepository";

interface Request {
  status_name: string;
  status: boolean;
}

class CreateStatusServices {
  public async execute({status_name, status}: Request): Promise<Status>{
    const statusRepository = getCustomRepository(StatusRepository);

    const findStatus = await statusRepository.findByStatus(status_name);

    if(findStatus){
      throw new Error("Status já cadastrado");
    }

    const statu = statusRepository.create({
      status_name,
      status
    });
    await statusRepository.save(statu);

    return statu;
  }
}

export default CreateStatusServices;