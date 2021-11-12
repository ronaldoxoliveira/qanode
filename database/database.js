const Sequelize = require("sequelize");

const connection = new Sequelize("guiaperguntas","root","banco@1976",{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;