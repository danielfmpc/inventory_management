import Router from "express";
import { getRepository } from "typeorm";
import Branch from "../models/Branch";
import CreateBranchsServices from "../services/CreateBranchsServices";

const branchsRouter = Router();

branchsRouter.get('/', async (request, response)=>{
  const branchsRepository = getRepository(Branch);
  const branch = await branchsRepository.find();
  return response.json(branch);
});

branchsRouter.post('/', async (request, response)=>{
  try {
    const {branch_name, states_id, companys_id, status_id} = request.body;

    const createBranchs = new CreateBranchsServices();

    const branch = await createBranchs.execute({
      branch_name,
      states_id,
      companys_id,
      status_id
    });

    return response.json(branch);
  } catch (err) {
    return response.status(400).json({error: err.message});
  }
});

export default branchsRouter;