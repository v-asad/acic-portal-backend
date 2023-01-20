const { DataTypes } = require("sequelize");

module.exports = (db) =>
  db.define("sr_answers", {
    id: {
      type: DataTypes.TEXT,
      primaryKey: true,
    },
    sresponse_id: {
      type: DataTypes.TEXT,
    },
    squestion_id: {
      type: DataTypes.TEXT,
    },
    selected_answer: {
      type: DataTypes.TEXT,
    },
  });
