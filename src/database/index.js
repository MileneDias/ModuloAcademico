import Sequelize from 'sequelize';
import Aluno from '../app/models/Aluno';
import config from '../config/database';

const models = [
    Aluno,
];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(config);

        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection));
    }
}

export default new Database();
