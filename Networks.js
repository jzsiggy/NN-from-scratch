class Network {
  constructor(layers) {
    this.weights = []
    this.biases = []
  }
}

const sigmoid = (x) => {
  return Math.exp(x) / (Math.exp(x) + 1)
};

const dSigmoid = (x) => {
  return sigmoid(x) * (1 - sigmoid(x))
}