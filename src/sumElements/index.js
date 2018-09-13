/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
const sumElements = arr => {
  var summary = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number" || Number(arr[i]) == "number"){
      summary += arr[i];
    }
  }
  return summary;
};
sumElements(['1', 3]);

export default sumElements;
