import Router from "express";
import { getRepository } from "typeorm";
import Company from "../models/Company";
import CreateCompanysServices from "../services/CreateCompanysServices";

const companysRouter = Router();

companysRouter.get('/', async (request, response)=>{
  const companysRepository = getRepository(Company);
  const company = await companysRepository.find();
  return response.json(company);
});

companysRouter.post('/', async (request, response)=>{
  try {
    const {company_name, cnpj, status_id} = request.body;

    const createCompany = new CreateCompanysServices();

    const company = await createCompany.execute({
      company_name,
      cnpj,
      status_id
    });

    return response.json(company);
  } catch (err) {
    return response.status(400).json({error: err.message});
  }
});

export default companysRouter;