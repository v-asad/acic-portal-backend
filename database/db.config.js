module.exports = {
  HOST: "localhost",
  USER: "me",
  PASSWORD: "password",
  DB: "acic_portal",
  PORT: 5432,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
