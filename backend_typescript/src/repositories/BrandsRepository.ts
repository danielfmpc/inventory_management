import { EntityRepository, Repository } from "typeorm";
import Brands from "../models/Brands";

interface Request {
  brand_name: string;
}

@EntityRepository(Brands)
class BrandsRepository extends Repository<Brands>{
  public async findByBrand({brand_name}: Request): Promise<Brands | null>{
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