const Sequelize = require("sequelize");

/*
*const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' 
});
*/
const sequelize = new Sequelize("saugat","postgres","admin",{
    host:"localhost",
    dialect:"postgres"
});

module.exports = sequelize;

