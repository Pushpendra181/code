const Book = require("../models/book");

const addBook = async (req, res, next) => {
  try {
    const { name, author, price, description, quantity } = req.body;
    const BAS_PATH = "http://localhost:4000/upload/";

    console.log("Received data:", name, author, price, description, quantity);

    if (!name || !author || !price) {
      return res.status(400).json({
        message: "Missing required fields",
        errors: {
          name: !name ? "Name is required" : undefined,
          author: !author ? "Author is required" : undefined,
          price: !price ? "Price is required" : undefined,
        },
      });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Image file is required" });
    }

    console.log("Uploaded image:", req.file);

    const book = new Book({
      name,
      author,
      price,
      description,
      quantity,
      image: `${BAS_PATH}${req.file.filename}`,
    });

    await book.save();
    res.status(201).json({ message: "Book added successfully", data: book });
  } catch (error) {
    next(error);
  }
};

const getBook = async (req, res, next) => {
  try {
    const allBooks = await Book.find();
    console.log(allBooks);
    res
      .status(200)
      .json({ status: true, message: " success full allBooks", allBooks });
  } catch (error) {
    next(error);
  }
};
const updateBook = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const { name, author, price, description, quantity, image } = req.body;

  try {
    const existingRecord = await Book.findOne({ where: { id } });
    if (!existingRecord) {
      throw new Error("Record not found");
    }
    if (existingRecord) {
      Object.keys(req.body).forEach((field) => {
        if (req.body[field] !== undefined) {
          existingRecord[field] = req.body[field];
        }
      });

      await existingRecord.save();

      res
        .status(200)
        .json({ message: "user update successfull", existingRecord });
    } else {
      res.status(404).send("Record not found");
      f;
    }
  } catch (err) {
    next(err);
  }
};
module.exports = { addBook, getBook, updateBook };
