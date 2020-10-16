import Router from "express";
import { getRepository } from "typeorm";
import Equipment from "../models/Equipment";
import CreateCompanysServices from "../services/CreateCompanysServices";
import CreateEquipmentsServices from "../services/CreateEquipmentsServices";

const equipmentsRouter = Router();

equipmentsRouter.get('/', async (request, response)=>{
  const equipmentsRepository = getRepository(Equipment);
  const equipment = await equipmentsRepository.find();
  return response.json(equipment);
});

equipmentsRouter.post('/', async (request, response)=>{
  try {
    const {
      equipment_name,
      description,
      patrimony,
      brands_id,
      situations_id,
      branchs_id,
      sectors_id,} = request.body;

    const createEquipment = new CreateEquipmentsServices();

    const equipment = await createEquipment.execute({
      equipment_name,
      description,
      patrimony,
      brands_id,
      situations_id,
      branchs_id,
      sectors_id,
    });

    return response.json(equipment);
  } catch (err) {
    return response.status(400).json({error: err.message});
  }
});

export default equipmentsRouter;