import { EntityRepository, Repository } from "typeorm";
import Brand from "../models/Brand";

interface Request {
  brand_name: string;
}

@EntityRepository(Brand)
class BrandsRepository extends Repository<Brand>{
  public async findByBrand({brand_name}: Request): Promise<Brand | null>{
    const findStatus = await this.findOne({
      where: { brand_name}
    });

    if(findStatus) {
      throw new Error("Marca já Cadastrada");
    }

    return findStatus || null;
  }
}

export default BrandsRepository