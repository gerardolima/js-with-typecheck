//@ts-nocheck

const doubler = x => {
  if(typeof(x) !== "number") throw new TypeError();
  return x *2;
}

// this function causes a run-time error
const offender = () => doubler('aa');

module.exports = {
  doubler,
  offender
};
