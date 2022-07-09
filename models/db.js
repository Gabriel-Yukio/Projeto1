// ------------- conexao com o banco de dados mysql -------------

const Sequelize = require("sequelize");

const sequelize = new Sequelize('ramigalevi', 'root', '12345', {
    host: "localhost",
    dialect: "mysql"
})

module.exports={
    Sequelize:Sequelize,
    sequelize:sequelize
}