import { getRepository } from "typeorm";
import Permissions_Users from "../models/Permissions_Users";

interface Request {
  permission_name: string;
  permission_code: number;
}

class CreatePermissionsServices {
  public async execute({permission_name, permission_code }:Request): Promise<Permissions_Users>{
    const permissionsUserRepository = getRepository(Permissions_Users);

    const checkPermissionUserExists = await permissionsUserRepository.findOne({
      where: {permission_name}
    });

    if (checkPermissionUserExists) {
      throw new Error("Permissão já cadastrada");
    }

    const permissionUser = permissionsUserRepository.create({
      permission_name,
      permission_code
    })
    await permissionsUserRepository.save(permissionUser);

    return permissionUser;
  }
}

export default CreatePermissionsServices;