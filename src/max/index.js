/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  var maxValue = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue && isFinite(arr[i])) {
      maxValue = arr[i];
    }
  }
  return maxValue;
};
max([1, 2, 4, Infinity]);

export default max;
