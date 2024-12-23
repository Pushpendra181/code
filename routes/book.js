const express = require("express");
const route = express.Router();

const book = require("../controllers/book");

const upload = require("../middlewares/multer");

route.post("/add", upload.single("image"), book.addBook);
route.get("/allbooks", book.getBook);
route.patch("/update/:id", upload.single("image"), book.updateBook);

// route.delete("/delete/:id", book.deleteUser);

module.exports = route;
