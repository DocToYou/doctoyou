const { DataTypes, ENUM } = require("sequelize");
const db = require("../../config/db");

const Providers = db.define(
  "providers",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
      validate: {
        isIn: [["M", "F", "O"]],
      },
    },
    role: {
      type: ENUM("caretaker", "doctor", "nurse", "admin"),
      allowNull: false,
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    indexes: [
      {
        name: "PK_ID",
        fields: ["id"],
        unique: true,
      },
      {
        name: "UNIQUE_EMAIL_PHONE",
        unique: true,
        fields: ["email", "phone"],
      },
      {
        name: "gender_MFO",
        fields: ["gender"],
      },
    ],
    tableName: "providers",
    timestamps: true,
    updatedAt: false,
  }
);

module.exports = Providers;
