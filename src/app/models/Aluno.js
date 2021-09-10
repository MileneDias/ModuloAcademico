import Sequelize, { Model } from 'sequelize';

class Alunos extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            ra: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            cpf: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        },
        {
           sequelize,
           schema: 'ModuloAcademico',
           tableName: 'alunos'
        });

        return this;
    }
}

export default Alunos;