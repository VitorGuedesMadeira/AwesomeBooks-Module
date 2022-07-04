import * as variables from './variables.js';

export const showmessage = (test, msg) => {
    if (test) {
      variables.error.textContent = msg;
      return test;
    }
    variables.error.textContent = msg;
    return test;
  };
  
export const validations = (input, msg, input2, msg2) => {
    if (input.trim() === '') {
      return showmessage(false, msg);
    } if (input2.trim() === '') {
      return showmessage(false, msg2);
    }
    return showmessage(true, '');
  };
  