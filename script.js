let myLibrary = [];

const bookLibrary = document.querySelector(".book-library");
const card = document.querySelector(".card");
const form = document.querySelector(".form");
const add = document.querySelector(".add-button1");
const close = document.querySelector(".close-button");
const overlay = document.querySelector(".overlay");
const tableRow = document.createAttribute("tr");
const tableData = document.createAttribute("td");
const tableBody = document.querySelector("tbody");
const submit = document.querySelector(".submit");

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

function addBookToLibrary(title, author, read) {
  const book = new Book(title, author, read);
  return (myLibrary += book);
}

function bookLoop() {}

function openTheForm() {
  form.style.display = "flex";
  overlay.style.display = "block";
}

function closeTheForm() {
  form.style.display = "none";
  overlay.style.display = "none";
}

add.addEventListener("click", () => {
  openTheForm();
});

close.addEventListener("click", () => {
  closeTheForm();
});

window.addEventListener("click", function (event) {
  if (event.target == overlay) {
    closeTheForm();
  }
});

submit.addEventListener("click", () => {
  let bookTitle = document.querySelector(".book-title").value;
  let bookAuthor = document.querySelector(".book-author").value;
  let readOrUnread = document.querySelector("input[name=read]:checked").value;

  addBookToLibrary(bookTitle, bookAuthor, readOrUnread);
  closeTheForm();
});
