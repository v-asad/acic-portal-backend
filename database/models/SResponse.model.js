const { DataTypes } = require("sequelize");

module.exports = (db) =>
  db.define("s_responses", {
    id: {
      type: DataTypes.TEXT,
      primaryKey: true,
    },
    survey_id: {
      type: DataTypes.TEXT,
    },
    is_reviewed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    responded_by: {
      type: DataTypes.TEXT,
    },
  });
