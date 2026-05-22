const jwt = require("jsonwebtoken");
const BlackListToken = require("../model/blackListToken");

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const token = authHeader.split(" ")[1];

    // Check blacklist
    const blacklisted = await BlackListToken.findOne({ token });

    if (blacklisted) {
      return res.status(401).json({
        success: false,
        message: "Token expired. Login again.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
      error: error.message,
    });
  }
};

module.exports = auth;