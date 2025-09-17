const { DataTypes } = require("sequelize");
const { db } = require("../../helper");

const Reviews = db.define(
  "reviews",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: "users",
          schema: "doctoyou",
        },
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
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
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        len: [1, 5],
      },
    },
    comment: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "reviews",
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false,
  }
);

module.exports = Reviews;
