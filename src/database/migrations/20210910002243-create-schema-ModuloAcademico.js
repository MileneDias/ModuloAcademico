'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createSchema('ModuloAcademico');
  },

  down: async (queryInterface, Sequelize) => {
    await quaryInterface.dropSchema('ModuloAcademico');
  }
};