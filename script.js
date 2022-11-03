let myLibrary = [];

const bookLibrary = document.querySelector(".book-library");
const card = document.querySelector(".card");

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

function addBookToLibrary(aBook) {
  myLibrary += aBook;
}

function bookLoop() {
  for (let book in myLibrary) {
    card.textContent = book;
  }
}

const button = document.querySelector("button");
button.addEventListener(click, () => {});
