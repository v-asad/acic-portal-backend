// Local Imports
const userRouter = require("./user.routes");
const surveyRouter = require("./survey.routes");
const SQAnswerRouter = require("./SQAnswer.routes");
const SQuestionRouter = require("./SQuestion.routes");
const SResponseRouter = require("./SResponse.routes");
const SRAnswerRouter = require("./SRAnswer.routes");

class Router {
  static declareRoutes = (server) => {
    // Routes
    server.use("/users", userRouter);
    server.use("/surveys", surveyRouter);
    server.use("/sq_answers", SQAnswerRouter);
    server.use("/s_questions", SQuestionRouter);
    server.use("/s_responses", SResponseRouter);
    server.use("/sr_answers", SRAnswerRouter);

    // default index route
    server.get("/", () =>
      console.log(
        "Well, What Can I Say? Thanks for trying this project, I guess..."
      )
    );
  };
}

module.exports = Router;
