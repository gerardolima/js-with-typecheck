const doubler = x => {
  if(typeof(x) !== "number") throw new TypeError();
  return x *2;
}

const mover = (point, delta) => {
  if(typeof(point.x) !== "number") throw new TypeError();
  if(typeof(point.y) !== "number") throw new TypeError();
  if(typeof(delta.x) !== "number" && typeof(delta.x) !== "undefined") throw new TypeError();
  if(typeof(delta.y) !== "number" && typeof(delta.y) !== "undefined") throw new TypeError();

  return { x: point.x + (delta.x || 0), y: point.y + (delta.y || 0) }
}

// these functions cause run-time errors
const doublerOffender = () => doubler('aa');
const moverOffender = () => mover({x: 1, y: 2}, {x:'a'});

module.exports = {
  doubler,
  mover,
  doublerOffender,
  moverOffender,
};
