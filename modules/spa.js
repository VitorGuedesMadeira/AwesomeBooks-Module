import * as variables from './variables.js';

export default variables.navAList.forEach((child) => {
  if (child.classList.contains('list')) {
    child.addEventListener('click', () => {
      variables.booksSection.classList.remove('hide');
      variables.newBookSection.classList.add('hide');
      variables.contactForm.classList.add('hide');
    });
  } else if (child.classList.contains('newBook')) {
    child.addEventListener('click', () => {
      variables.newBookSection.classList.remove('hide');
      variables.booksSection.classList.add('hide');
      variables.contactForm.classList.add('hide');
    });
  } else {
    child.addEventListener('click', () => {
      variables.contactForm.classList.remove('hide');
      variables.newBookSection.classList.add('hide');
      variables.booksSection.classList.add('hide');
    });
  }
});
