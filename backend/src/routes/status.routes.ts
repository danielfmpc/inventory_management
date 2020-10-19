import Router from "express";
import { getCustomRepository } from "typeorm";
import StatusRepository from "../repositories/StatusRepository";
import CreateStatusServices from "../services/CreateStatusServices";

const statusRouter = Router();

statusRouter.get('/', async (request, response) =>{
  const statusRepository = getCustomRepository(StatusRepository);
  const status = await statusRepository.find();
  return response.json(status);
});

statusRouter.post('/', async (request, response)=>{
  try {
    const {status_name, status} = request.body;
    const createStatus = new CreateStatusServices();
    const statu = await createStatus.execute({status_name, status});

    return response.json(statu);
  } catch (err) {
    return response.status(400).json({error: err.message});
  }
});

export default statusRouter;