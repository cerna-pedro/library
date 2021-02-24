import './index.css';

// Constructor

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Book Storage

const myBooks = [
  new Book('The House of the Spirits', 'Isabel Allende', 496, true),
  new Book('The Richest Man In Babylon', 'George S. Clason', 94, true),
  new Book('The Bhagavad Gita', 'Eknath Easwaran', 296, false),
];

// Query Selectors

const main = document.querySelector('#content');
const addButton = document.querySelector('#add-button');

// Create Book Cards
const createBooks = () => {
  if (myBooks.length) {
    myBooks.forEach((book, i) => {
      const bookCard = document.createElement('div');
      bookCard.classList.add('card');
      bookCard.setAttribute('data-book-index', `${i}`);
      bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <h4>${book.author}</h4>
      <p>This book has ${book.pages} pages.</p>
      <p>${book.read ? 'This book has been read 💯' : ''}</p>
      <button>${book.read ? 'Mark as Not Read' : 'Mark as Read'}</button>
      <button>Remove from Library</button>
      `;
      main.append(bookCard);
    });
  } else {
    const startInstructions = document.createElement('p');
    startInstructions.textContent = 'Start by pressing the button below!';
    addButton.insertAdjacentElement('beforeBegin', startInstructions);
  }
};

createBooks();
