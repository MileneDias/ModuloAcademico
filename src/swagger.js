const swaggerAutogen = require('swagger-autogen');
const config = require('./config/swagger');

const endpoints = [];
const outputFile = './src/swagger_documentation.json';

swaggerAutogen(outputFile, endpoints, config);