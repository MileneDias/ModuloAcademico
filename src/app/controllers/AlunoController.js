import Aluno from '../models/Aluno';
//import { Op } from 'sequelize';

class AlunoController {
    async index(req, res) {
        const data = await Aluno.findAll();
        return res.json(data);
    }

    async show(req, res) {
        const { id } = req.params;

        const aluno = await Aluno.findByPk(id);

        return res.json(aluno);
    }

    async store(req, res) {
        const { name, email, cpf, ra} = req.body;

        if (!name || !email || !cpf || !ra) {
            return res.status(400).send({ msg: 'Algum campo não preenchido corretamente' });
        }

        const existe = await Aluno.findOne({
            where: { ra }
        });

        if(existe){
            return res.status(400).send({msg: 'Aluno já existe'});
        }

        const aluno = await Aluno.create({
            name, email, cpf, ra
        });

        return res.status(200).json(aluno);
    }

    async delete(req, res) {
        const { id } = req.params;

        const aluno = await Aluno.destroy({
            where: { id },
            returning: true,
        });

        return res.status(200).json(aluno);
    }
    
    
}

export default new AlunoController();