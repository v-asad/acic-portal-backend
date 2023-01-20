const { DataTypes } = require("sequelize");

module.exports = (db) => {
  const User = db.define("users", {
    id: {
      type: DataTypes.TEXT,
      primaryKey: true,
    },
    email: {
      type: DataTypes.TEXT,
    },
    password: {
      type: DataTypes.TEXT,
    },
    name: {
      type: DataTypes.TEXT,
    },
    role: {
      type: DataTypes.TEXT,
    },
  });

  return User;
};
