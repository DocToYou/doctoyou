const sequelize = require("sequelize");
const db = require("../../config/db");

const CaretakerCred = db.define(
  "caretaker_cred",
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
  },
  {
    indexes: [{
        name: "pk_caretaker_id",
        fields: ["id"]
    },
  {
    name: "FK_p_id_caretaker",
    fileds: ["p_id"],
  }],
    tableName: "caretaker_cred",
    timestamps: false,
  }
);

module.exports = CaretakerCred;
