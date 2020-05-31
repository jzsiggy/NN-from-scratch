const { math } = require('./assets');

const dataGen = (num) => {
  x = [];
  y = [];
  for (let i = 0; i < num; i++) {
    let val1 = math.random(0, 1);
    let val2 = math.random(0, 1);
    x.push([val1, val2])
    if (val1 - val2 < 0) {
      y.push([1]);
    } else {
      y.push([0])
    }
  }
  return { x , y };
};

module.exports = {
  dataGen,
};