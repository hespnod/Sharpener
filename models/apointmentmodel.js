const Sequelize = require('sequelize');

const sequelize = require('../util/database');
const { validate } = require('uuid');

const Apointment = sequelize.define("book",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:Sequelize.STRING,
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            isEmail:true
        }
    },
    phone:{
        type:Sequelize.DECIMAL(10,0),
        allowNull:false
    }
});

module.exports = Apointment;