const { math, sigmoid , dSigmoid } = require('./assets');

class Network {
  constructor(layers) {
    this.weights = layers.slice(0, -1).map((layerSize, index) => {
      const nextLayerSize = layers[index+1]
      return (
        [...Array(nextLayerSize)].map(() => {
          return (
            [...Array(layerSize)].map(w => math.random())
          )
        })
      );
    })
  }

  feedForward (input) {
    let activations = input;
    for (let layer of this.weights) {
      activations = layer.map(weights => {
        return sigmoid(math.dot(activations, weights))
      })
    }
    return activations
  }

  backProp (x, y) {
    const originalCost = this.cost(x, y)
    let gradientVector = []

    this.weights.forEach((layer, lIndex) => {
      const dLayer = [];
      layer.forEach((neuron, nIndex) => {
        const dNeuron = []
        neuron.forEach((weight, wIndex) => {
          let original = weight;
          this.weights[lIndex][nIndex][wIndex] += 0.01;
          let newCost = this.cost(x, y)
          let delWeight = (newCost - originalCost) / 0.01
          dNeuron.push(delWeight)
          this.weights[lIndex][nIndex][wIndex] = original
        })
        dLayer.push(dNeuron)
      })
      gradientVector.push(dLayer);
    })
    gradientVector.forEach((layer, lIndex) => {
      layer.forEach((neuron, nIndex) => {
        neuron.forEach((del, wIndex) => {
          this.weights[lIndex][nIndex][wIndex] -= del;
        })
      })
    })
  };

  cost (x, y) {
    const activations = this.feedForward(x);
    const costVector = activations.map((yhat, index) => {
      return ( yhat - y[index] )**2
    })
    return math.sum(costVector);
  }

  
}

const network = new Network([1, 5, 1])
console.log(network.weights)

network.train([
  [1],
  [1],
  [1],
  [1],
  [0],
  [0],
  [0],
], [
  [0],
  [0],
  [0],
  [0],
  [1],
  [1],
  [1]
])

console.log(network.weights)
