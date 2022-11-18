/**
 * @file Manages database connection configuration.
 * @author Fikri Rahmat Nurhidayat
 */

const { Sequelize } = require("sequelize");

/** Destruct environment variable to get database configuration */
const {
  DB_USERNAME = "postgres",
  DB_PASSWORD = "ronny1202",
  DB_HOST = "containers-us-west-21.railway.app",
  DB_NAME = "railway",
  DB_PORT = "6577",
  DB_URI = "postgresql://postgres:H0N9BfcyjYPMWOMEADI2@containers-us-west-21.railway.app:6577/railway"
} = process.env;

const db = new Sequelize(DB_URI,{
  define:{
    timestamps:false
  }
})

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    dialect: "postgres",
    DB_PORT
    
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    dialect: "postgres",
    DB_PORT

  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    dialect: "postgres",
    DB_PORT

  },
  db
};
