//utilizando o sequelize para manipular SQL /transaçoes, relacoes
const Sequelize = require('sequelize');
const db = {}
//config conexao com o banco de dados 
const sequelize = new Sequelize('starwars', 'root', '', {
    host:'localhost',
    dialect: 'mysql',
    operatorAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1000
    }

})

db.Sequelize = sequelize
db.sequelize = Sequelize

module.exports = db;
