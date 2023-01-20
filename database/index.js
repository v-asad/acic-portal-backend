// Package Imports
const Sequelize = require("sequelize");

// Local Imports
const dbConfig = require("./db.config");
const {
  User,
  Survey,
  SQuestion,
  SQAnswer,
  SResponse,
  SRAnswer,
} = require("./models");

class Database {
  static db = {};
  static connect() {
    const sequelize = new Sequelize(
      dbConfig.DB,
      dbConfig.USER,
      dbConfig.PASSWORD,
      {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: { ...dbConfig.pool },
      }
    );

    const { db } = Database;

    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    // Embedding Schema in the db
    db.User = User(sequelize);
    db.Survey = Survey(sequelize);
    db.SQuestion = SQuestion(sequelize);
    db.SQAnswer = SQAnswer(sequelize);
    db.SResponse = SResponse(sequelize);
    db.SRAnswer = SRAnswer(sequelize);

    db.sequelize
      .sync()
      .then(() => {
        console.log("Synced db.");
      })
      .catch((err) => {
        console.log("Failed to sync db: " + err.message);
      });
  }
}

module.exports = Database;
