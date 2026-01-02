const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUserController = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    if (!name || !email || !password || !confirmPassword) {
      return res.status(404).send({
        message: "Filds cannot be empty",
        success: false,
      });
    }
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return res.status(409).send({
        message: "User already exist",
        success: false,
      });
    }

    if (password != confirmPassword) {
      return res.status(400).send({
        message: "password mismatch",
        success: false,
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = userModel.create({
      name,
      email,
      password: hashPassword,
    });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });
    res.status(201).send({
      message: `${name} your account creation success`,
      token,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

const loginUserController = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .send({ success: false, message: "Email or password can't be empty" });
  }

  const isExist = await userModel.findOne({ email: email });
  if (!isExist) {
    return res.status(404).send({
      message: "User not found",
      success: false,
    });
  }

  try {
    const isMatch = await bcrypt.compare(password, isExist.password);
    if (!isMatch) {
      return res.status(404).send({
        message: "Incorrect Password",
        success: false,
      });
    }
    const user = await userModel.findOne({ email });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });
    res.status(200).send({
      message: `Login success! Welcome back ${user.name}`,
      token,
      success: true,
    });
  } catch (error) {
    console.error({
      message: "Error in fetching api",
      success: false,
      error,
    });
  }
};

module.exports = { createUserController, loginUserController };
