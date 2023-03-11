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

const defineRelations = (db) => {

  // Relations for User
  db.User.hasMany(db.Survey)
  db.User.hasMany(db.SResponse)

  // Relations for Survey
  db.Survey.belongsTo(db.User)
  db.Survey.hasMany(db.SQuestion)

  // Relations for Survey Responses
  db.SResponse.belongsTo(db.User)
  db.SResponse.hasMany(db.SRAnswer)

  // Relations for Survey Questions
  db.SQuestion.belongsTo(db.Survey)
  db.SQuestion.hasMany(db.SQAnswer)

  // Relations for Survey Answers
  db.SQAnswer.belongsTo(db.SQuestion)
  db.SQAnswer.hasMany(db.SRAnswer)

  // Relations for Survey Response Answers
  db.SRAnswer.belongsTo(db.SQAnswer)
  db.SRAnswer.belongsTo(db.SResponse)
};

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

    defineRelations(db);

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
