
const bookSchema = require("../utils/validationSchema");

// In-memory storage
let books = [];

const createBook = (req, res) => {
  const { error, value } = bookSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const newBook = { id: books.length + 1, ...value };
  books.push(newBook);

  res.status(201).json(newBook);
};

const getBooks = (req, res) => {
  res.json(books);
};

const searchBooks = (req, res) => {
  res.send("You are on the search page");
};

const getBookById = (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);

  if (!book) return res.status(404).send("Not Found");

  res.json(book);
};


const deleteBook = (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);

  if (index === -1) return res.status(404).send("Not Found");

  books.splice(index, 1);
  res.send(`Book with ID ${id} deleted successfully`);
};

 module.exports = { getBooks, searchBooks, getBookById, createBook, deleteBook };
