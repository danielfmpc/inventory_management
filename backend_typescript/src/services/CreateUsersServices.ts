import { startOfHour } from "date-fns";
import { getCustomRepository } from "typeorm";
import User from "../models/User";
import UsersRepository from "../repositories/UsersRepository";

interface Request{
  name: string;
  date: Date;
}

class CreateUsersServices {
  public async execute({name, date}: Request): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const userDate = startOfHour(date);

    const findUserInSameDate = await usersRepository.findByDate(userDate);

    if(findUserInSameDate) {
      throw Error('This is users alread booke');
    }
    
    const user = usersRepository.create({
      name,
      date: userDate
    });


    await usersRepository.save(user);

    return user;
  }
}

export default CreateUsersServices;