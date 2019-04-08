/**
 * This method returns the number passed in argument _x_ plus 1.
 * 
 * @param {number} x
 * @returns {number} the value of x plus 1
 */
const increment = x => {
  if(typeof(x) !== "number") throw new TypeError();
  return x +1;
}

module.exports = {
  increment
};
