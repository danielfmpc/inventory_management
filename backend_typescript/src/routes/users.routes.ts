import Router from "express";
import { parseISO } from "date-fns";
import { getCustomRepository } from "typeorm";
import UsersRepository from "../repositories/UsersRepository";
import CreateUsersServices from "../services/CreateUsersServices";

const usersRouter = Router();

usersRouter.get('/', async (request, response)=> {
  const usersRepository = getCustomRepository(UsersRepository);
  const user = await usersRepository.find();
  return response.json(user);
});

usersRouter.post('/', async (request, response)=> {
  try {
    const { 
      full_name, 
      cpf,
      email,
      password,
      birth, 
      branchs_id,
      permissions_users_id,
      sectors_id,
      status_id
     } = request.body;
  
    const parseDate = parseISO(birth);

    const createUser = new CreateUsersServices();

    const user = await createUser.execute({
      full_name,
      birth: parseDate,
      cpf,
      email,
      password,
      branchs_id,
      permissions_users_id,
      sectors_id,
      status_id
    });


    
    return response.json(user);
  } catch (err) {
    return response.status(400).json({error: err.message})
  }
});


export default usersRouter;