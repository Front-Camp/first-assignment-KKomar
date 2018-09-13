/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  if (typeof str !== 'string') {
    alert('Not a string');
  } else {
    return str.split('').reverse().join('');
  }
};
turnMeBaby('Some text');

export default turnMeBaby;
