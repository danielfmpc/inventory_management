import { getRepository, Repository } from "typeorm";
import Branch from "../models/Branch";

interface Request {
  branch_name: string;
  status_id: string;
  states_id: string;
  companys_id: string;
}

class CreateBranchsServices extends Repository<Branch>{
  public async execute({
    branch_name,
    status_id,
    companys_id,
    states_id
  }:Request) : Promise<Branch>{
    const branchsRepository = getRepository(Branch);

    const findBranchsExist = await branchsRepository.findOne({
      where: {branch_name}
    });

    if(findBranchsExist) {
      throw new Error("Filial já cadastrada");
    }

    const branch = branchsRepository.create({
      branch_name,
      companys_id,
      states_id,
      status_id
    });
    await branchsRepository.save(branch);
    return branch;
  }
}

export default CreateBranchsServices;