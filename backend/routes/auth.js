const express = require("express");
const {
  createUserController,
  loginUserController,
  logoutController,
} = require("../controllers/auth");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.post("/register", createUserController);
router.post("/login", loginUserController);
router.get("/logout", logoutController);
router.get("/me", authMiddleware, (req, res) => {
  res.json({
    user: req.user,
  });
});
module.exports = router;
