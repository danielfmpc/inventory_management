import { getRepository, Repository } from "typeorm";
import Company from "../models/Company";

interface Request {
  company_name: string;
  cnpj: string;
  status_id: string;
}

class CreateCompanysServices extends Repository<Company> {
  public async execute({company_name, cnpj, status_id}:Request): Promise<Company>{
    const companysRepository = getRepository(Company);

    const findCompanysExists = await companysRepository.findOne({
      where:{company_name}
    });

    if(findCompanysExists){
      throw new Error("Empresa já cadastrada");
    }
    
    const findCompanysCnpjExists = await companysRepository.findOne({
      where:{cnpj}
    });

    if(findCompanysCnpjExists){
      throw new Error("CPNJ já cadastrado");
    }

    const company = companysRepository.create({
      company_name,
      cnpj,
      status_id
    });

    await companysRepository.save(company);
    return company;
  }
}

export default CreateCompanysServices;