const jwt = require("jsonwebtoken");
const User = require("../models/users");

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      return res
        .status(401)
        .json({ status: false, message: "Access token is missing." });
    }
    const decoded = jwt.verify(token.split(" ")[1], "12345");
    const user = await User.findById(decoded.id);

    if (!user) {
      return res
        .status(404)
        .json({ status: false, message: "User not found." });
    }

    req.user = user;
    next();
  } catch (error) {
    res
      .status(401)
      .json({ status: false, message: "Invalid or expired token." });
  }
};

const authorizeAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }
  next();
};
module.exports = { authenticate, authorizeAdmin };
