let myLibrary = [];

const form = document.querySelector(".form");
const add = document.querySelector(".add-button1");
const close = document.querySelector(".close-button");
const overlay = document.querySelector(".overlay");
const submit = document.querySelector(".submit");
const readButton = document.querySelector(".read-button");
const deleteButton = document.querySelector(".delete-button");

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

function resetForm() {
  document.querySelector("form").reset();
}

add.addEventListener("click", () => {
  resetForm();
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
      if (object[key] == object["read"]) {
        const tableData = document.createElement("td");
        const btn = document.createElement("button");

        function capitalizeFirstLetter(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
        }

        btn.textContent = capitalizeFirstLetter(`${object[key]}`);
        btn.classList.add("table-button", "read-button");
        tableData.appendChild(btn);
        tableRow.appendChild(tableData);
        btn.addEventListener("click", () => {
          if (btn.textContent == "Read") {
            btn.textContent = "Unread";
          } else {
            btn.textContent = "Read";
          }
        });
      } else if (object.hasOwnProperty(key)) {
        const tableData = document.createElement("td");
        tableData.textContent = `${object[key]}`;
        tableRow.appendChild(tableData);
      }
    }
  });

  btn.textContent = "Delete";
  btn.classList.add("table-button", "delete-button");
  tableData.appendChild(btn);
  tableRow.appendChild(tableData);
  btn.addEventListener("click", () => {
    btn.addEventListener("click", (event) => {
      event.target.parentNode.parentNode.remove();
    });
  });
}

submit.addEventListener("click", () => {
  let bookTitle = document.querySelector(".book-title").value;
  let bookAuthor = document.querySelector(".book-author").value;
  let readOrUnread = document.querySelector("input[name=read]:checked").value;

  addBookToLibrary(bookTitle, bookAuthor, readOrUnread);
  closeTheForm();
  addLibrary();
  myLibrary = [];
});

readButton.addEventListener("click", () => {
  if (readButton.textContent == "Read") {
    readButton.textContent = "Unread";
  } else {
    readButton.textContent = "Read";
  }
});

deleteButton.addEventListener("click", (event) => {
  event.target.parentNode.parentNode.remove();
});
