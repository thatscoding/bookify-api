import { catchAsyncError } from "../middlewares/catchAsyncErrors.js";
import { Books } from "../modals/book.js";
import ErrorHandler from "../utils/errorHandle.js";

class HandleBook {
  static createBook = catchAsyncError(async (req, res, next) => {
    const book = await Books.create(req.body);
    book.save();

    res.status(201).json({
      success: true,
      message: "Book created successfully",
      book,
    });
  });

  static getAllBooks = catchAsyncError(async (req, res, next) => {
    const totalBooks = await Books.countDocuments();
    const books = await Books.find({});
    res.status(200).json({ success: true, "total books": totalBooks, books });
  });

  static getBookById = catchAsyncError(async (req, res, next) => {
    const book = await Books.findOne({ _id: req.params.id });

    if (!book) {
      return next(new ErrorHandler("Book not found!", 403));
    }
    res.status(200).json({ success: true, book });
  });

  static updateBook = catchAsyncError(async (req, res, next) => {
    let book = await Books.findOne({ _id: req.params.id });
    console.log(book);
    if (!book) {
      return next(new ErrorHandler("Book not found!", 403));
    }
    book = await Books.updateOne({ _id: req.params.id }, { $set: req.body });

    res.status(200).json({
      success: true,
      message: "book updated successfully",
      book,
    });
  });

  static deleteBook = catchAsyncError(async (req, res, next) => {
    let book = await Books.findOne({ _id: req.params.id });

    if (!book) {
      return next(new ErrorHandler("Book not found!", 403));
    }

    book = await Books.deleteOne({ _id: req.params.id });

    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      book,
    });
  });
}

export default HandleBook;
