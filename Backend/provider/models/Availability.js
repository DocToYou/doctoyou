const { DataTypes, ENUM } = require("sequelize");
const db = require("../../config/db");

const Availability = db.define(
  "availability",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    is_availables: {
      type: DataTypes.BOOLEAN,
    },
    provider_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: "providers",
          schema: "doctoyou",
        },
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    day_of_week: {
      type: ENUM("MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"),
      allowNull: false,
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    tableName: "availability",
    timestamps: false,
  }
);

module.exports = Availability;
