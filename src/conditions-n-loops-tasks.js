/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

function isPositive(number) {
  return number >= 0;
}

function getMaxNumber(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}

function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x) return true;
  if (queen.y === king.y) return true;
  if (queen.x - queen.y === king.x - king.y) return true;
  if (queen.x + queen.y === king.x + king.y) return true;
  return false;
}

function isIsoscelesTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return false;
  if (a + b <= c || a + c <= b || b + c <= a) return false;
  return a === b || b === c || a === c;
}

function convertToRomanNumerals(num) {
  let result = '';
  let n = num;
  while (n >= 10) {
    result += 'X';
    n -= 10;
  }
  if (n >= 9) {
    result += 'IX';
    n -= 9;
  }
  if (n >= 5) {
    result += 'V';
    n -= 5;
  }
  if (n >= 4) {
    result += 'IV';
    n -= 4;
  }
  while (n >= 1) {
    result += 'I';
    n -= 1;
  }
  return result;
}

function convertNumberToString(numberStr) {
  const words = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    const ch = numberStr[i];
    switch (ch) {
      case '-':
        result += 'minus';
        break;
      case '.':
      case ',':
        result += 'point';
        break;
      default:
        result += words[+ch];
        break;
    }
    if (i < numberStr.length - 1) result += ' ';
  }
  return result;
}

function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i += 1) {
    if (str[i] !== str[len - 1 - i]) return false;
  }
  return true;
}

function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

function isContainNumber(num, digit) {
  let n = num < 0 ? -num : num;
  if (n === 0) return digit === 0;
  while (n > 0) {
    if (n % 10 === digit) return true;
    n = (n - (n % 10)) / 10;
  }
  return false;
}

function getBalanceIndex(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i += 1) {
    let left = 0;
    let right = 0;
    for (let j = 0; j < i; j += 1) left += arr[j];
    for (let j = i + 1; j < len; j += 1) right += arr[j];
    if (left === right) return i;
  }
  return -1;
}

function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < size; j += 1) matrix[i][j] = 0;
  }
  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;
  let counter = 1;
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i += 1) {
      matrix[top][i] = counter;
      counter += 1;
    }
    top += 1;
    for (let i = top; i <= bottom; i += 1) {
      matrix[i][right] = counter;
      counter += 1;
    }
    right -= 1;
    for (let i = right; i >= left; i -= 1) {
      matrix[bottom][i] = counter;
      counter += 1;
    }
    bottom -= 1;
    for (let i = bottom; i >= top; i -= 1) {
      matrix[i][left] = counter;
      counter += 1;
    }
    left += 1;
  }
  return matrix;
}

function rotateMatrix(matrix) {
  const m = matrix;
  const n = m.length;
  for (let i = 0; i < n; i += 1) {
    for (let j = i; j < n; j += 1) {
      const tmp = m[i][j];
      m[i][j] = m[j][i];
      m[j][i] = tmp;
    }
  }
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n / 2; j += 1) {
      const tmp = m[i][j];
      m[i][j] = m[i][n - 1 - j];
      m[i][n - 1 - j] = tmp;
    }
  }
  return m;
}

function sortByAsc(arr) {
  const a = arr;
  const len = a.length;
  for (let i = 1; i < len; i += 1) {
    const key = a[i];
    let j = i - 1;
    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j];
      j -= 1;
    }
    a[j + 1] = key;
  }
  return a;
}

function shuffleChar(str, iterations) {
  const n = str.length;
  if (n === 0) return str;
  const evenCount = Math.ceil(n / 2);

  const perm = [];
  for (let k = 0; k < evenCount; k += 1) perm[k] = 2 * k;
  for (let k = 0; evenCount + k < n; k += 1) perm[evenCount + k] = 2 * k + 1;

  const compose = (p, q) => {
    const r = [];
    for (let i = 0; i < n; i += 1) r[i] = p[q[i]];
    return r;
  };

  let result = [];
  for (let i = 0; i < n; i += 1) result[i] = i;

  let base = perm;
  let exp = iterations;
  while (exp > 0) {
    if (exp % 2 === 1) result = compose(result, base);
    base = compose(base, base);
    exp = (exp - (exp % 2)) / 2;
  }

  let out = '';
  for (let i = 0; i < n; i += 1) out += str[result[i]];
  return out;
}

function getNearestBigger(number) {
  const digits = [];
  let n = number;
  while (n > 0) {
    digits[digits.length] = n % 10;
    n = (n - (n % 10)) / 10;
  }
  const len = digits.length;
  for (let i = 0; i < len / 2; i += 1) {
    const tmp = digits[i];
    digits[i] = digits[len - 1 - i];
    digits[len - 1 - i] = tmp;
  }

  let pivot = -1;
  for (let i = len - 2; i >= 0; i -= 1) {
    if (digits[i] < digits[i + 1]) {
      pivot = i;
      break;
    }
  }
  if (pivot === -1) return number;

  let swapIdx = len - 1;
  while (digits[swapIdx] <= digits[pivot]) swapIdx -= 1;

  const tmp = digits[pivot];
  digits[pivot] = digits[swapIdx];
  digits[swapIdx] = tmp;

  for (let i = pivot + 1, j = len - 1; i < j; i += 1, j -= 1) {
    const t = digits[i];
    digits[i] = digits[j];
    digits[j] = t;
  }

  let result = 0;
  for (let i = 0; i < len; i += 1) result = result * 10 + digits[i];
  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
