import Router, { query } from 'express';
import { getRepository } from 'typeorm';
import Term from '../models/Term';
import CreateTermsServices from '../services/CreateTermsServices';

const termsRouter = Router();

termsRouter.get('/', async (request, response) =>{
  const termsRepository = getRepository(Term);
  const term = await termsRepository.find();
  return response.json(term);
});

termsRouter.post('/', async(request, response)=>{
  try {
    const {
      term_name,
      equipments_id,
      users_id
    } = request.body;
  
    const createTerms = new CreateTermsServices();
    const term = await createTerms.execute({
      term_name,
      users_id,
      equipments_id
    });
  
    return response.json(term);
  } catch (err) {
    return response.status(400).json({error: err.message });
  }

});

export default termsRouter;