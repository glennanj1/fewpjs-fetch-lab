function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
  return fetch
  
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
    const h3 = document.createElement('h3');
    h3.innerHTML = book.url;
    main.appendChild(h3)
    const h4 = document.createElement('h4');
    h4.innerHTML = book.characters;
    main.appendChild(h4)
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});