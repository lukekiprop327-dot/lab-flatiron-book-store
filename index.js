document.addEventListener("DOMContentLoaded", () => {
  // 1. Select the DOM element with the id of 'header' and save as 'bookStoreTitle'
  const bookStoreTitle = document.querySelector("#header");

  // 2. Change the textContent of 'bookStoreTitle' to the name property of the 'bookStore' variable
  if (bookStoreTitle && typeof bookStore !== "undefined") {
    bookStoreTitle.textContent = bookStore.name;
  }

  // 3. Select the book list container
  const bookList = document.querySelector("#book-list"); // Adjust ID if your HTML uses something different

  // 4. Loop through every book element in the bookStore object
  if (typeof bookStore !== "undefined" && bookStore.books) {
    bookStore.books.forEach(book => {
      // Create elements for each book
      const bookContainer = document.createElement("li");
      const bookTitle = document.createElement("h3");
      const bookAuthor = document.createElement("p");
      const bookImage = document.createElement("img");

      // Change textContent and attributes to match the book object
      bookTitle.textContent = book.title;
      bookAuthor.textContent = book.author;
      bookImage.src = book.image;
      bookImage.alt = book.title;

      // Append book elements to bookContainer (li)
      bookContainer.appendChild(bookTitle);
      bookContainer.appendChild(bookAuthor);
      bookContainer.appendChild(bookImage);

      // Append bookContainer element to bookList
      bookList.appendChild(bookContainer);
    });
  }
});