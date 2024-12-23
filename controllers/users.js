const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signIn = async (req, res, next) => {
  const { name, email, password, role } = req.body;
  //   console.log(name, email, password);

  try {
    if ((name, email, password)) {
      const hasPass = await bcrypt.hash(password, 10);

      const user = new User.Admin({ name, email, password: hasPass, role });
      const data = await user.save();
      res.status(200).json({ status: true, message: "all fild create", data });
    }
  } catch (error) {
    next(error);
  }
};

const logIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.Admin.findOne({ email });
    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }
    console.log(user.password);
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    // console.log(isPasswordMatch);
    if (isPasswordMatch) {
      const token = jwt.sign({ id: user._id, email: user.email }, "12345");
      console.log(token);
      res.status(200).json({ status: true, message: "token success", token });
    }
  } catch (error) {
    next(error);
  }
};
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Check if the requesting user has an admin role
    const adminUser = req.user;
    if (adminUser.role !== "admin") {
      return res
        .status(403)
        .json({ status: false, message: "Access denied. Admins only." });
    }

    // Find and delete the user by ID
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res
        .status(404)
        .json({ status: false, message: "User not found." });
    }

    res
      .status(200)
      .json({ status: true, message: "User deleted successfully." });
  } catch (error) {
    next(error);
  }
};

const allUsers = async (req, res, next) => {
  try {
    const adminUser = req.user; 
    if (adminUser.role !== "admin") {
      return res
        .status(403)
        .json({ status: false, message: "Access denied. Admins only." });
    }

    const users = await User.find();

    if (!users || users.length === 0) {
      return res
        .status(404)
        .json({ status: false, message: "No users found." });
    }

    res.status(200).json({
      status: true,
      message: "Users fetched successfully.",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { signIn, logIn, allUsers, deleteUser };
