const Sequelize = require("sequelize");
const db = require('../database/config.js');

module.exports = db.Sequelize.define(
    'users',
    {
        id : {
            type: Sequelize.INTEGER,
            primaryKey: true,
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
        createdAt : {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        } 
        
    },
    {
        timestamps: false
    }

)
