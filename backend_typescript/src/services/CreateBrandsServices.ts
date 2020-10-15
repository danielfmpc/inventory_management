import { getCustomRepository } from "typeorm";
import Brands from "../models/Brands";
import BrandsRepository from "../repositories/BrandsRepository";

interface Request {
  brand_name: string;
}

class CreateBrandsServices {
  public async execute({brand_name}:Request): Promise<Brands>{
    const brandsRepository = getCustomRepository(BrandsRepository);
    const findBrand = await brandsRepository.findByBrand({brand_name});

    if (findBrand) {
      throw new Error("Setor já cadastrado");
    }

    const brand = brandsRepository.create({brand_name});
    await brandsRepository.save(brand);

    return brand;
  }
}

export default CreateBrandsServices;