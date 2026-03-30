require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: "root",
    database: "burger_exquisite",
    host: "localhost",
    port: 3306,
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: 'mysql',
  },
  production: {
    username: "sql10732124",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};