import { EntityRepository, Repository } from "typeorm";
import Status from "../models/Status";



@EntityRepository(Status)
class StatusRepository extends Repository<Status>{
  public async findByStatus(status_name: string): Promise<Status | null> {
    const findStatus = await this.findOne({
      where: {status_name}
    });

    return findStatus || null;
  }
}

export default StatusRepository;