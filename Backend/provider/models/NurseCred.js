const { DataTypes } = require("sequelize");
const db = require("../../config/db");

const NurseCred = db.define(
  "nurse_cred",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    p_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "providers",
        key: "id",
      },
    },
    license: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    degree: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  },
  
  {
    indexes:[{
      name: "pk",
      fileds: ["id"]
    },
  {
    name: "FK_pid_nurse",
    fields: ["p_id"]
  },{
    name: "UNIQUE_LICENSE_nurse",
    fields:["license"]
  }],
    tableName: "nurse_cred",
    timestamps: false,
  }
);

module.exports = NurseCred;
