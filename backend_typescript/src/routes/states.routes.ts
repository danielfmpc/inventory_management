import Router from "express";
import { getCustomRepository } from "typeorm";
import StatesRepository from "../repositories/StatesRepository";
import CreateStatesServices from "../services/CreateStatesServices";

const statesRouter = Router();

statesRouter.get('/', async (request, response)=>{
  const statesRepository = getCustomRepository(StatesRepository);
  const states = await statesRepository.find();
  return response.json(states);
});
statesRouter.post('/', async (request, response)=>{
  try {
    const {states_name} = request.body;

    const createState = new CreateStatesServices();

    const state = await createState.execute({states_name});

    return response.json(state);
  } catch (err) {
    return response.status(400).json({error: err.message});
  }
});

export default statesRouter;