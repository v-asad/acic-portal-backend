const { DataTypes } = require("sequelize");

module.exports = (db) =>
  db.define("s_questions", {
    id: {
      type: DataTypes.TEXT,
      primaryKey: true,
    },
    survey_id: {
      type: DataTypes.TEXT,
    },
    type: {
      type: DataTypes.TEXT,
    },
    title: {
      type: DataTypes.TEXT,
    },
    position: {
      type: DataTypes.INTEGER,
    },
  });
