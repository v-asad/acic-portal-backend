const { DataTypes } = require("sequelize");

module.exports = (db) =>
  db.define("sq_answers", {
    id: {
      type: DataTypes.TEXT,
      primaryKey: true,
    },
    squestion_id: {
      type: DataTypes.TEXT,
    },
    title: {
      type: DataTypes.TEXT,
    },
    position: {
      type: DataTypes.INTEGER,
    },
  });
