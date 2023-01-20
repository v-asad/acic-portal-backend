const { SRAnswerController: Controller } = require("../controllers");

const express = require("express");
const router = express.Router();

router.get("/", Controller.getAll);
router.get("/:id", Controller.getById);
router.put("/create", Controller.create);
router.patch("/update", Controller.update);
router.delete("/:id", Controller.delete);

module.exports = router;
