import { format, parse, parseISO, toDate } from "date-fns";
import { ptBR } from "date-fns/locale";
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
  public formattedDate(date: Date) {
    const result = format(
      date,
      'dd/MM/yyyy HH:mm:ss',
      { locale: ptBR }
    );
    
    
    return result  as unknown as Date;
  }
  // public formattedDate(date: Date) {
  //   return format(
  //     date, 
  //     "'Dia' dd 'de' MMMM', às ' HH:mm:ss'h'"
  //   );
  // } 
}

export default StatusRepository;