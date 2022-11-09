let myLibrary = [];

const bookLibrary = document.querySelector(".book-library");
const card = document.querySelector(".card");
const form = document.querySelector(".form");
const add = document.querySelector(".add-button1");

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

function addBookToLibrary(title, author, read) {
  const book = new Book(title, author, read);
  return (myLibrary += book);
}

function bookLoop() {
  for (let book in myLibrary) {
    card.textContent = book;
  }
}

function openTheForm() {
  form.style.display = "flex";
}

function closeTheForm() {
  form.style.display = "none";
}

add.addEventListener("click", () => {
  openTheForm();
});
