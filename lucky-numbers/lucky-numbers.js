// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const n1 = Number(array1.join(''));
  const n2 = Number(array2.join(''));
  return n1 + n2;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const numbArray = String(value).split('');
  let isTrue = false;
  for (let index = 0; index < (numbArray.length / 2); index++) {
        if(numbArray[index] === numbArray[numbArray.length - (index+1)]) {
            isTrue = true;
        } else {
            isTrue = false;
        }
  }
  return isTrue;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(input === null || input === undefined || input === '') {
    return 'Required field';
  } else if((input === NaN || input !== '') && !Number(input)) {
    return 'Must be a number besides 0';
  } else if(Number(input)) {
    return '';
  }
}
