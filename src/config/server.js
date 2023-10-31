import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./db.js";
import errorMiddleware from "../api/middlewares/error.js";
import bookRouter from "../api/routes/book.js";

dotenv.config();

const server = express();

server.use(cors());
server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

connectDB();

server.get("/", (req, res) => {
  res.send("Welcome to Bookify 💐");
});

// routes
server.use("/v1", bookRouter);
server.use(errorMiddleware);

export default server;
