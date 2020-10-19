import Router from "express";
import { getCustomRepository } from "typeorm";
import SituationsRepository from "../repositories/SituationsRepository";
import CreateSituationsServices from "../services/CreateSituationsServices";

const situationsRouter = Router();

situationsRouter.get('/', async (request, response)=>{
  const situationsRepository = getCustomRepository(SituationsRepository);
  const situation = await situationsRepository.find();
  return response.json(situation);
});
situationsRouter.post('/', async (request, response)=>{
  try {
    const {situation_name} = request.body;

    const createSituation = new CreateSituationsServices();

    const situation = await createSituation.execute({situation_name});

    return response.json(situation);
  } catch (err) {
    return response.status(400).json({error: err.message});
  }
});

export default situationsRouter;