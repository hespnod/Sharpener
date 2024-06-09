const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "apointment",
  "rishuishind",
  "Amicqflt!@#2314",
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = sequelize;
