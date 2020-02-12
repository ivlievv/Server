'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn('Task', 'isDone', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    });
    '';
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Task','isDone');
  }
};
