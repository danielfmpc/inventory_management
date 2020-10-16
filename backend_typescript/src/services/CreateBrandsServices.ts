import { getCustomRepository, getRepository } from "typeorm";
import Brand from "../models/Brand";
import BrandsRepository from "../repositories/BrandsRepository";

interface Request {
  brand_name: string;
}

class CreateBrandsServices {
  public async execute({brand_name}:Request): Promise<Brand>{
    const brandsRepository = getRepository(Brand);

    const checkBrandsExists = await brandsRepository.findOne({
      where: {brand_name}
    });

    if (checkBrandsExists) {
      throw new Error("Marca já cadastrada");
    }

    // const brandsRepository = getCustomRepository(BrandsRepository);
    // const findBrand = await brandsRepository.findByBrand({brand_name});

    // if (findBrand) {
    //   throw new Error("Setor já cadastrado");
    // }

    const brand = brandsRepository.create({brand_name});
    await brandsRepository.save(brand);

    return brand;
  }
}

export default CreateBrandsServices;