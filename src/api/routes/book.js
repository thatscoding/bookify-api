import express from "express";
import HandleBook from "../controllers/book.js";

const router = express.Router();

router
  .route("/book/:id")
  .get(HandleBook.getBookById)
  .put(HandleBook.updateBook)
  .delete(HandleBook.deleteBook);

router.route("/book").post(HandleBook.createBook);
router.route("/books").get(HandleBook.getAllBooks);

export default router;
