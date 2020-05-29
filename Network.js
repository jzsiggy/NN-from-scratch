const { math, sigmoid , dSigmoid } = require('./assets');

class Network {
  constructor(layers) {
    this.size = layers.length;
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
  }
}

const network = new Network([4, 5, 3])
network.feedForward([1, 2, 3, 4])