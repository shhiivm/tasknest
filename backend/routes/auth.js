const express = require("express");
const {
  createUserController,
  loginUserController,
  logoutController,
} = require("../controllers/auth");
const router = express.Router();

router.post("/register", createUserController);
router.post("/login", loginUserController);
router.get("/logout", logoutController);

module.exports = router;
