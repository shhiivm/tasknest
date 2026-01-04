const express = require("express");
const authMiddleware = require("../middlewares/auth");
const router = express.Router();
const {
  createTaskModel,
  displayTaskModel,
  deleteTaskModel,
  updateTaskModel,
} = require("../controllers/task");

router.post("/tasks", authMiddleware, createTaskModel);
router.get("/tasks", authMiddleware, displayTaskModel);
router.delete("/tasks/:id", authMiddleware, deleteTaskModel);
router.put("/tasks/:id", authMiddleware, updateTaskModel);

module.exports = router;
