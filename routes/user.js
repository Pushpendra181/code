const express = require("express");
const route = express.Router();

const register = require("../controllers/users");
const authenticate = require("../middlewares/auth");



// route.post("/adminLogIn", register.createDefaultAdmin);
route.post("/signUp", register.signIn);
route.post("/logIn", register.logIn);

route.delete("/delete/:id", register.deleteUser);

module.exports = route;
