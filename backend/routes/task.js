const express = require("express");
const router = express.Router();
const {
  createTaskModel,
  displayTaskModel,
  deleteTaskModel,
} = require("../controllers/task");

router.post("/tasks", createTaskModel);
router.get("/tasks", displayTaskModel);
router.delete("/tasks/:id", deleteTaskModel);

module.exports = router;
