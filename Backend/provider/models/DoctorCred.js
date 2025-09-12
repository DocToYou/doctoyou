const { DataTypes } = require("sequelize");
const { db } = require("../../helper");

const DoctorCred = db.define(
  "doctor_cred",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    p_id: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: "providers",
          schema: "doctoyou",
        },
        key: "id",
      },
      onDelete: "CASCADE",
    },
    license: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    specialization: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    indexes: [
      {
        name: "pk",
        fields: ["id"],
      },
      {
        name: "FK_pid_doctor",
      },
      {
        name: "UNIQUE_LICENSE_doctor",
        fields: ["license"],
      },
    ],
    tableName: "doctor_cred",
    timestamps: false,
  }
);

module.exports = DoctorCred;
