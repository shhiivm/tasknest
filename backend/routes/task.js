const express = require("express");
const authMiddleware = require("../middlewares/auth");
const router = express.Router();
const {
  createTaskModel,
  displayTaskModel,
  deleteTaskModel,
  updateTaskModel,
} = require("../controllers/task");

router.post("/tasks", createTaskModel);
router.get("/tasks", authMiddleware, displayTaskModel);
router.delete("/tasks/:id", deleteTaskModel);
router.put("/tasks/:id", updateTaskModel);

module.exports = router;
