const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    const authToken = req.headers["authorization"];
    if (!authToken || !authToken.startsWith("Bearer ")) {
      return res.status(401).send({
        message: "Authorization header missing or malformed",
        success: false,
      });
    }
    const token = authToken.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decode) => {
      if (err) {
        return res.status(401).send({
          message: "Unauthorized user",
          success: false,
        });
      }
      req.user = decode;
      next();
    });
  } catch (err) {
    console.error(err);
    res.status(501).send({
      message: "Error in getting API",
      success: false,
      err,
    });
  }
};

module.exports = authMiddleware;
