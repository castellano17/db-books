const express = require("express");
const cors = require("cors");

const booksRouter = require("./books/books.router");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server ok" });
});

app.use("/", booksRouter);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
