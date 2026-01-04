const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    let token = null;

    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    } else if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    }

    if (!token) {
      return res.status(401).send({
        message: "Authorization header missing or malformed",
        success: false,
      });
    }

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
