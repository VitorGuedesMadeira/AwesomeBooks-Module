/* eslint-disable max-classes-per-file */
import * as variables from './modules/variables.js';
import * as spa from './modules/spa.js';
import * as val from './modules/validation.js';
import ds from './modules/dataStructure.js';
import {BookConstructor} from './modules/bookConstructor.js';
import DynamicModule from './modules/dynamic.js';
import {DateTime} from './modules/luxon.min.js';

// ---------------------- SETTING TIME ------------------------ //
const dateP = document.querySelector('.dateParagraph');
const dt = DateTime.now();
dateP.textContent = `${dt.toLocaleString(DateTime.DATETIME_MED)}`;

// ---------------------- ADD BTN ----------------------------- //
addBtn.addEventListener('click', () => {
  const titleName = variables.title.value;
  const authorName = variables.author.value;
  const titleMsg = 'title space is in blank';
  const authorMsg = 'author space is in blank';

  if (val.validations(titleName, titleMsg, authorName, authorMsg)) {
    const addNewBook = new BookConstructor(titleName, authorName);
    ds.booksData.push(addNewBook);
    DynamicModule.loadBooks(ds.booksData.length - 1);
    localStorage.setItem('books', JSON.stringify(ds.booksData));
    variables.title.value = '';
    variables.author.value = '';
  }
});

// ---------------------- LOCAL STORAGE ---------------------- //

window.addEventListener('load', () => {
  if (localStorage.getItem('books')) {
    ds.booksData = JSON.parse(localStorage.getItem('books'));
  }
  for (let i = 0; i < ds.booksData.length; i += 1) {
    DynamicModule.loadBooks(i);
  }
});
