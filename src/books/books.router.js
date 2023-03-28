const router = require("express").Router();

const bookServices = require("./books.services");

router.get("/books", bookServices.getAllBooks);
router.post("/books", bookServices.postNewBook);

router.get("/books/:id", bookServices.getBookByID);

router.put("/books/:id", bookServices.postUpdate);

router.delete("/books/:id", bookServices.deleteId);

module.exports = router;
