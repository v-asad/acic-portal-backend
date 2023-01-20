// Package Imports

// Local Imports
const { SurveyService: Service } = require("../services");

module.exports = class {
  // Get All
  static async getAll(_, res) {
    const data = await Service.getAll();
    if (data.error) {
      res.json({ success: false, message: "Request could not be processed." });
    } else {
      res.json({ success: true, surveys: data.result });
    }
  }

  // Get By Id
  static async getById(req, res) {
    const { id } = req.params;

    if (id) {
      const data = await Service.getById(id);
      if (data.error) {
        res.json({ success: false, message: "Not found." });
      } else {
        res.json({ success: true, survey: data.result });
      }
    } else {
      res.json({ success: false, message: "Please provide an ID." });
    }
  }

  // Create
  static async create(req, res) {
    const { ...rest } = req.body;

    const id = new Date().getTime();

    const data = await Service.create({
      id,
      ...rest,
    });
    if (data.error) {
      res.json({ success: false, message: "Request could not be processed." });
    } else {
      res.json({ success: true, survey: data.result });
    }
  }

  // Update
  static async update(req, res) {
    const { id, ...rest } = req.body;

    console.log(rest);

    if (id) {
      const data = await Service.update(id, { ...rest });
      if (data.error) {
        res.json({
          success: false,
          message: "Request could not be processed.",
        });
      } else {
        res.json({ success: true });
      }
    } else {
      res.json({ success: false, message: "Please provide an ID." });
    }
  }

  // Delete
  static async delete(req, res) {
    const { id } = req.params;

    if (id) {
      const data = await Service.delete(id);
      if (data.error) {
        res.json({
          success: false,
          message: "Request could not be processed.",
        });
      } else {
        res.json({ success: true });
      }
    } else {
      res.json({ success: false, message: "Please provide an ID" });
    }
  }
};
