const checkLengthString = (string = '', number = 3) => string.length <= number;

const isPalindrome = (string = '') => {
  const currentString = string.toLowerCase().replaceAll(' ', '');
  let result = '';

  for (let i = currentString.length - 1; i >= 0; i--) {
    result += currentString[i];
  }

  return currentString === result;
};

checkLengthString();
isPalindrome();
