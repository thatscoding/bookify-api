import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Book's title is required"] },
    author: { type: String, required: [true, "Book's author is required"] },
    summary: { type: String, required: [true, "Book's summary is required"] },
  },
  { timestamps: true }
);

export const Books = mongoose.model("Books", BookSchema);
