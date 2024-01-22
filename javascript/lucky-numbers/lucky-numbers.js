// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  // @ts-ignore
  return Number(Array.from(array1).join("")) + Number(Array.from(array2).join(""));
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  // @ts-ignore
  const testbase = Array.from(value.toString()).join("");
  // @ts-ignore
  return Number(testbase) === Number([...testbase].reverse().join(""));
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
// @ts-ignore
// @ts-ignore
export function errorMessage(input) {
  // @ts-ignore
  return !input ? 'Required field' : !Number(input) ? 'Must be a number besides 0' : ""
}
