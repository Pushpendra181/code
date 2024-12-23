const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  quantity: { type: Number, default: 0 },
  image: { type: String }, 
});

module.exports = mongoose.model("Book", bookSchema);
