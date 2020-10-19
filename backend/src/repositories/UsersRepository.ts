import { EntityRepository, Repository } from "typeorm";
import User from "../models/User";

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  public async findByDate(birth: Date): Promise<User | null> {
    const findUser = await this.findOne({
      where: {birth}
    });

    return findUser || null;
  }
}

export default UsersRepository;