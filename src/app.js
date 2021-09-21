import express from 'express';
import dotenv from 'dotenv';

import AlunosRoute from './app/routes/aluno';;

import './database/index';

class App {
    constructor() {
        this.server = express();
        this.config();
        this.routers();
    }

    config() {
        this.server.use(express.json());
        // this.server.use(cors());

        dotenv.config({
            path: process.env.NODE_ENV === 'test'
                ? '.env.test' : '.env',
        });
    }

    routers() {
        this.server.use(AlunosRoute);
    }
}

export default new App().server;
