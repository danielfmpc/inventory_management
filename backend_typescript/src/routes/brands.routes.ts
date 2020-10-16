import Router from "express";
import { getCustomRepository } from "typeorm";
import BrandsRepository from "../repositories/BrandsRepository";
import CreateBrandsServices from "../services/CreateBrandsServices";

const brandsRouter = Router();

brandsRouter.get('/', async (request, response)=>{
  const brandsRepository = getCustomRepository(BrandsRepository);
  const brand = await brandsRepository.find();
  return response.json(brand);
});

brandsRouter.post('/', async (request, response)=>{
  try {
    const {brand_name} = request.body;

    const createBrand = new CreateBrandsServices();

    const brand = await createBrand.execute({brand_name});

    return response.json(brand);
  } catch (err) {
    return response.status(400).json({error: err.message});
  }
});

export default brandsRouter;