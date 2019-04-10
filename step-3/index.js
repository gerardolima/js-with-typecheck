/**
 * This function returns the number passed in argument _x_ plus 1.
 * 
 * @param {number} x
 * @returns {number} the value of x plus 1
 */
const doubler = x => {
  if(typeof(x) !== "number") throw new TypeError();
  return x *2;
}

// this function causes a compilation error
const offender = () => doubler('qq');

module.exports = {
  doubler
};
