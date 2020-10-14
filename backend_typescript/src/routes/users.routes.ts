import { parseISO } from "date-fns";
import Router from "express";
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
    const { full_name, date } = request.body;
  
    const parseDate = parseISO(date);

    const createUser = new CreateUsersServices();

    const user = await createUser.execute({
      date: parseDate,
      full_name
    });

    return response.json(user);
  } catch (err) {
    return response.status(400).json({error: err.message})
  }
});


export default usersRouter;