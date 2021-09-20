import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';

const routes = new Router();

routes.get(
    '/alunos', 
    AlunoController.index   
);
routes.get(
    '/alunos/:id', 
    AlunoController.show
);
routes.post(
    'alunos',
     AlunoController.store  
);
routes.delete('/alunos/:id', AlunoController.delete);

export default routes;