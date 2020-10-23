import { format, toDate } from "date-fns";
import { toDateWithOptions } from "date-fns-tz/fp";
import { ptBR } from "date-fns/locale";
import Router from "express";
import { getCustomRepository } from "typeorm";
import StatusRepository from "../repositories/StatusRepository";
import CreateStatusServices from "../services/CreateStatusServices";

const statusRouter = Router();

statusRouter.get('/', async (request, response) =>{
  const statusRepository = getCustomRepository(StatusRepository);
  const status = await statusRepository.find();
  status.map(
    element => {
      const createdAtFormatted = statusRepository.formattedDate(element.created_at);
      const updatedAtFormatted = statusRepository.formattedDate(element.updated_at);
      element.created_at = createdAtFormatted;
      element.updated_at = updatedAtFormatted;
    }
  );
  return response.json(status);
});

statusRouter.post('/', async (request, response)=>{
  try {
    const { status_name, status } = request.body;
    const createStatus = new CreateStatusServices();
    const statu = await createStatus.execute({status_name, status});

    return response.json(statu);
  } catch (err) {
    return response.status(400).json({error: err.message});
  }
});

export default statusRouter;