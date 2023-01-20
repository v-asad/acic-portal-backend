const { DataTypes } = require("sequelize");

module.exports = (db) =>
  db.define("surveys", {
    id: {
      type: DataTypes.TEXT,
      primaryKey: true,
    },
    created_by: {
      type: DataTypes.TEXT,
    },
    title: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
  });
