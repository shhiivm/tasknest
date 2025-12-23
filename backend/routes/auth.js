const express = require("express");
const {
  createUserController,
  loginUserController,
} = require("../controllers/user");
const router = express.Router();

router.post("/register", createUserController);
router.post("/login", loginUserController);

module.exports = router;
