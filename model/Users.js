const Sequelize = require("sequelize");
const db = require('../database/config.js');

module.exports = db.sequelize.define(
    'usuario',
    {
        id : {
            type: Sequelize.INTEGER,
            primarykey: true,
            autoIncrement: true  
        },
        username : {
            type: Sequelize.STRING   
        },
        email : {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        //este é meu tmstamp
        created : {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        } 
    },
    {
        timestamp: false
    }

)
