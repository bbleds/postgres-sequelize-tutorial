'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'frienemy',
      'friend',
      Sequelize.BOOLEAN
    );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('frienemy', 'friend');
  }
};
