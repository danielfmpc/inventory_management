import Router from "express";
import { getRepository } from "typeorm";
import Permissions_Users from "../models/Permissions_Users";
import CreatePermissionsServices from '../services/CreatePermissionsServices'

const permissionsRouter = Router();

permissionsRouter.get('/', async (request, response)=>{
  const permissionsRepository = getRepository(Permissions_Users);
  const permission = await permissionsRepository.find();
  return response.json(permission);
});
permissionsRouter.post('/', async (request, response)=>{
  try {
    const {permission_name, permission_code} = request.body;

    const createPermission = new CreatePermissionsServices();

    const permissionCreated = await createPermission.execute({
      permission_name,
      permission_code
    });

    return response.json(permissionCreated);
  } catch (err) {
    return response.status(400).json({error: err.message});
  }
});

export default permissionsRouter;