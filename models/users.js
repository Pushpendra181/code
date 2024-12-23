const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Admin = mongoose.model("Admin", adminSchema);

const createDefaultAdmin = async () => {
  const adminExists = await Admin.findOne({ email: process.env.ADMIN_EMAIL });
  if (!adminExists) {
    const admin = new Admin({
      name: "Admin",
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
    });
    await admin.save();
    console.log("Default admin created.");
  } else {
    console.log("Default admin already exists.");
  }
};

module.exports = { Admin, createDefaultAdmin };
