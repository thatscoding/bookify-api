import server from "./config/server.js";

const PORT = process.env.PORT;

// Handling Uncaught Exception e.g undefined variables
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Uncaught Exception");
  process.exit(1);
});

// console.log(logout);
const app = server.listen(PORT, (error) => {
  if (error) console.log(error);

  console.log(`server running at http://localhost:${PORT}`);
});
