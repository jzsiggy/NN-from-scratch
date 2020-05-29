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

  backProp () {
    
  }

  cost (x, yhat) {
    const activations = this.feedForward(x);
    const costVector = activations.map((val, index) => {
      return ( val - yhat[index] )**2
    })
    return( math.sum(costVector) )
  }
}

const network = new Network([1, 1, 1, 1])
console.log( network.cost([1], [0]) )