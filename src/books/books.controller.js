const booksDB = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    synopsis:
      "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn't have to be that way.",
    link_amazon:
      "https://www.amazon.com.mx/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
    url_image:
      "https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
    genre: "Tech",
    release_year: 2008,
  },
];

let bookId = 1;

const findAllBooks = async () => {
  return booksDB;
};

const findBookById = async (id) => {
  const book = booksDB.find((bookItem) => bookItem.id === id);
  return book;
};

const createBook = async (bookOjb) => {
  const newBook = {
    id: bookId++,
    title: bookOjb.name || "Untitled",
    author: bookOjb.author || "Anonymus",
    synopsis: bookOjb.synopsis || "Lorem Ipsun",
    link_amazon: bookOjb.link_amazon || null,
    url_image: bookOjb.url_image || null,
    genre: bookOjb.genre || null,
    release_year: bookOjb.release_year || null,
  };
  booksDB.push(newBook);
  return newBook;
};

const bookput = async (id, bookData) => {
  const bookIndex = booksDB.findIndex((book) => book.id === id);
  if (bookIndex !== -1) {
    return (booksDB[bookIndex] = {
      ...booksDB[bookIndex],
      ...bookData,
    });
  }
};

const deleteBookById = async (id) => {
  const bookIndex = booksDB.findIndex((book) => book.id === id);
  if (bookIndex !== -1) {
    booksDB.splice(bookIndex, 1);
    return true;
  }
  return false;
};

module.exports = {
  findAllBooks,
  findBookById,
  createBook,
  bookput,
  deleteBookById,
};
