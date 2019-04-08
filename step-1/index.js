const increment = x => {
  if(typeof(x) !== "number") throw new TypeError();
  return x +1;
}

module.exports = {
  increment
};
