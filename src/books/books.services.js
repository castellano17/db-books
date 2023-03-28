const booksControllers = require("./books.controller");

const getAllBooks = (req, res) => {
  booksControllers
    .findAllBooks()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};

const getBookByID = (req, res) => {
  const id = Number(req.params.id);
  booksControllers
    .findBookById(id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Book not found" });
      }
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};

const postNewBook = (req, res) => {
  const bookObj = req.body;
  booksControllers
    .createBook(bookObj)

    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};

const postUpdate = (req, res) => {
  const id = Number(req.params.id);
  const bookData = req.body;

  booksControllers
    .bookput(id, bookData)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Book not found" });
      }
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};

const deleteId = (req, res) => {
  const id = Number(req.params.id);
  booksControllers
    .deleteBookById(id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Book not found" });
      }
      res.status(200).json({ message: "book successfully removed" });
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};

module.exports = {
  getAllBooks,
  getBookByID,
  postNewBook,
  postUpdate,
  deleteId,
};
