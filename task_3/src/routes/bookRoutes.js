const express = require("express");
const { getBooks,
  getBookById,
  createBook,
  deleteBook,
  searchBooks}=require("../controllers/bookController");
const router = express.Router();


router.get("/search", searchBooks);
router.get("/:id", getBookById);
router.get("/", getBooks);
router.post("/", createBook);
router.delete("/:id", deleteBook);


module.exports = router;
