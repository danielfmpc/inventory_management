import { startOfHour } from "date-fns";
import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";
import User from "../models/User";
import UsersRepository from "../repositories/UsersRepository";

interface Request{
  full_name: string;
  cpf: string;
  email: string;
  password: string;
  birth: Date;
  status_id: string;
  branchs_id: string;
  permissions_users_id: string;
  sectors_id: string;
}

class CreateUsersServices {
  public async execute({
    full_name, 
    birth, 
    cpf, 
    email, 
    password, 
    status_id,
    branchs_id,
    permissions_users_id,
    sectors_id
    }: Request): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const userDate = startOfHour(birth);

    const findUserInSameDate = await usersRepository.findByDate(userDate);

    if(findUserInSameDate) {
      throw Error('This is users alread booke');
    }

    const hashedPassword = await hash(password, 8);
    
    const user = usersRepository.create({
      full_name,
      cpf,
      email,
      password: hashedPassword,
      birth: userDate,
      status_id,
      branchs_id,
      permissions_users_id,
      sectors_id
    });

    await usersRepository.save(user);


    return user;
  }
}

export default CreateUsersServices;