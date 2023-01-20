// Package Imports

// Local Imports
const { UserService } = require("../services");

module.exports = class {
  // Get All
  static async getAll(_, res) {
    const data = await UserService.getAll();
    if (data.error) {
      res.json({ success: false, message: "Request could not be processed." });
    } else {
      res.json({ success: true, users: data.result });
    }
  }

  // Get By Id
  static async getById(req, res) {
    const { id } = req.params;

    if (id) {
      const data = await UserService.getById(id);
      if (data.error) {
        res.json({ success: false, message: "Not found." });
      } else {
        res.json({ success: true, user: data.result });
      }
    } else {
      res.json({ success: false, message: "Please provide an ID." });
    }
  }

  // Create
  static async create(req, res) {
    const { ...rest } = req.body;

    const id = new Date().getTime();

    const data = await UserService.create({
      id,
      ...rest,
    });
    if (data.error) {
      res.json({ success: false, message: "Request could not be processed." });
    } else {
      res.json({ success: true, user: data.result });
    }
  }

  // Update
  static async update(req, res) {
    const { id, ...rest } = req.body;

    console.log(rest);

    if (id) {
      const data = await UserService.update(id, { ...rest });
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
      const data = await UserService.delete(id);
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
