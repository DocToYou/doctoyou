const { Sequelize } = require("sequelize");
const db = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: process.env.MYSQL_DIALECT,
  },
);

const createConnection = () => {
  try {
    db.authenticate()
      .then(() => console.log("Database Connection Established!"))
      .catch((error) => console.log("Error in authenticatin!", error));
  } catch (error) {
    console.log(`Sequelize Error: ${error}`);
  }
};

createConnection();

module.exports = db;
