const { create, all } = require('mathjs');

const config = {
  randomSeed: 1
}
const math = create(all, config)

const sigmoid = (x) => {
  return Math.exp(x) / (Math.exp(x) + 1)
};

const dSigmoid = (x) => {
  return sigmoid(x) * (1 - sigmoid(x))
}

module.exports = {
  math,
  sigmoid,
  dSigmoid,
};