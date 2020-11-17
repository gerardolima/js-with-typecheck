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

/**
 * A point on a 2 dimensions space.
 *
 * @typedef {Object} Point2D
 * @property {number} x
 * @property {number} y
 */

/**
 * Am offset on a 2 dimensions space.
 *
 * @typedef {Object} Delta2D
 * @property {number | undefined} x
 * @property {number | undefined} y
 */

/**
 * This function returns a new Point2D instance, calculated from the given
 * `point`, offset of the axis x and y as given by `delta`.
 *
 * @param {Point2D} point
 * @param {Delta2D} delta
 * @returns {Point2D} the value of x plus 1
 */
const mover = (point, delta) => {
  if(typeof(point.x) !== "number") throw new TypeError();
  if(typeof(point.y) !== "number") throw new TypeError();
  if(typeof(delta.x) !== "number" && typeof(delta.x) !== "undefined") throw new TypeError();
  if(typeof(delta.y) !== "number" && typeof(delta.y) !== "undefined") throw new TypeError();

  return { x: point.x + (delta.x || 0), y: point.y + (delta.y || 0) }
}

// this function causes a compilation error
const offender = () => doubler('qq');
const moverOffender1 = () => mover({x: 1, y: 2}, {x:'a'}); // type mismatch
const moverOffender2 = () => mover({x: 1, y: 2}, {X:10});  // typo 'X' instead of 'x'

module.exports = {
  doubler,
  mover,
};
