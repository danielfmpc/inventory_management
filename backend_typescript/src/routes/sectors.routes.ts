import Router from "express";
import { getCustomRepository } from "typeorm";
import SectorsRepository from "../repositories/SectorsRepository";
import CreateSectorsServices from "../services/CreateSectorsServices";

const sectorsRouter = Router();

sectorsRouter.get('/', async (request, response)=>{
  const sectorsRepository = getCustomRepository(SectorsRepository);
  const states = await sectorsRepository.find();
  return response.json(states);
});
sectorsRouter.post('/', async (request, response)=>{
  try {
    const {sector_name} = request.body;

    const createSector = new CreateSectorsServices();

    const sector = await createSector.execute({sector_name});

    return response.json(sector);
  } catch (err) {
    return response.status(400).json({error: err.message});
  }
});

export default sectorsRouter;