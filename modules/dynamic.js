import ds from './dataStructure.js';
import * as variables from './variables.js';

export default class Dynamic {
    static loadBooks(index) {
      // creatingElements
      const bookLi = document.createElement('li');
      const titleP = document.createElement('p');
      const authorP = document.createElement('p');
      const deleteBtn = document.createElement('button');
      // content inside
      titleP.textContent = `"${ds.booksData[index].title}"`;
      authorP.textContent = `by ${ds.booksData[index].author}`;
      deleteBtn.textContent = 'Remove';
      // div for title and author
      const divTitleAndAuthor = document.createElement('div');
      // appendChilds
      divTitleAndAuthor.appendChild(titleP);
      divTitleAndAuthor.appendChild(authorP);
      bookLi.appendChild(divTitleAndAuthor);
      bookLi.appendChild(deleteBtn);
      variables.bookUl.appendChild(bookLi);
      // giving classes
      bookLi.setAttribute('class', 'liStyles');
      deleteBtn.setAttribute('id', index);
      deleteBtn.setAttribute('class', 'buttons');
      divTitleAndAuthor.setAttribute('class', 'displayFlex');
  
      deleteBtn.addEventListener('click', () => {
        ds.booksData.splice(index, 1);
        variables.bookUl.removeChild(bookLi);
        localStorage.setItem('books', JSON.stringify(ds.booksData));
      });
    }
  }
  