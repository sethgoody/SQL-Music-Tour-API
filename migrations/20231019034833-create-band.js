"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Bands",
      {
        band_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        genre: Sequelize.TEXT,
        start_time: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        end_time: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Bands");
  },
};