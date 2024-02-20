function isStringLessOrEqual(string, maxLength) {
  return string.length <= maxLength;
}

isStringLessOrEqual('проверяемая строка', 20);

function isPalindrome(string) {
  string = string.replaceAll(' ', '').toLowerCase();
  const reverseString = string.split('').reverse().join('');
  return string === reverseString;
}

function isPalindrome2(string) {
  string = string.replaceAll(' ', '').toLowerCase();
  const array = string.split('');
  for (let i = 0; i < Math.floor(array.length / 2) ; i++) {
    if (array[i] !== array.at(-1 - i)) {
      return false;
    }
  }
  return true;
}

isPalindrome('Лёша на полке клопа нашёл ');
isPalindrome2('Лёша на полке клопа нашёл ');

function parseNumber(input) {
  return parseInt(String(input).split('').filter((elem) => !isNaN(elem)).join(''), 10);
}


parseNumber('2023 год');
parseNumber('ECMAScript 2022');
parseNumber('1 кефир, 0.5 батона');
parseNumber('агент 007');
parseNumber('а я томат');
parseNumber(2023);
parseNumber(-1);
parseNumber(1.5);
