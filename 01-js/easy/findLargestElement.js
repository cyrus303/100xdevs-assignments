/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let max = numbers[0];
  numbers.slice(1).map((ele) => {
    ele > max ? (max = ele) : null;
  });
  return max;
}

findLargestElement([3, 7, 2, 9, 1]);
module.exports = findLargestElement;
