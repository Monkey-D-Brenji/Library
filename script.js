let myLibrary = [];

const form = document.querySelector(".form");
const add = document.querySelector(".add-button1");
const close = document.querySelector(".close-button");
const overlay = document.querySelector(".overlay");
const submit = document.querySelector(".submit");

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

function addBookToLibrary(title, author, read) {
  const book = new Book(title, author, read);
  return myLibrary.push(book);
}

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

function addLibrary() {
  const tableBody = document.querySelector("tbody");
  const tableRow = document.createElement("tr");
  const btn = document.createElement("button");
  const tableData = document.createElement("td");

  myLibrary.forEach((object) => {
    tableBody.appendChild(tableRow);

    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        if (key.read) {
          btn.textContent = `${object[key]}`;
          const tableData = document.createElement("td");
          tableData.appendChild(btn);
          tableRow.appendChild(tableData);
        }

        const tableData = document.createElement("td");
        tableData.innerHTML = `${object[key]}`;
        tableRow.appendChild(tableData);
      }
    }
  });

  btn.textContent = "Delete";
  tableData.appendChild(btn);
  tableRow.appendChild(tableData);
}

submit.addEventListener("click", () => {
  let bookTitle = document.querySelector(".book-title").value;
  let bookAuthor = document.querySelector(".book-author").value;
  let readOrUnread = document.querySelector("input[name=read]:checked").value;

  let newBook = addBookToLibrary(bookTitle, bookAuthor, readOrUnread);
  closeTheForm();
  addLibrary();
  myLibrary = [];
});
