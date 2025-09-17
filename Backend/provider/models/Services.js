const sequelize = require("sequelize");
const db = require("../../config/db");

const Services = db.define(
  "services",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    indexes: [
      {
        name: "pk_ID_dervice",
        field: ["id"],
      },
    ],
    tableName: "services",
    timestamps: false,
  }
);

module.exports = Services;
