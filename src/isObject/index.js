/**
 * This function should return "true" only for "Object" type
 * @param {any} data - this can be any value: string, number, array, object, etc.
 * @return {boolean} result of the "isObject" function
 * @example
 * isObject({});   // true
 * isObject([]);   // false
 * isObject(null); // false
 */
const isObject = data => {
  if (typeof data === 'object' && Array.isArray(data) !== true && data !== null) {
    return true;
  } else {
    return false;
  }
};
isObject(null);


export default isObject;
