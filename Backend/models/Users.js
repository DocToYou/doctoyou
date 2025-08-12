const { DataTypes } = require("sequelize");
const db = require("../config/db");

const User = db.define(
  "Users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    fname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lname: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.CHAR,
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    timestamps: false,  // prevent create auto columns: createdAt/updatedAt
  }
);

module.exports = User;