const math = require('mathjs');


class Network {
  constructor(layers) {
    this.size = layers.length;
    this.weights = layers.slice(0, -1).map((layerSize, index) => {
      const nextLayerSize = layers[index+1]
      return (
        [...Array(nextLayerSize)].map(() => {
          return (
            math.matrix( [...Array(layerSize)].map(w => Math.random()) )
          )
        })
      );
    })
  }

  feedForward (input) {
    let layer1 = this.weights[0]
    let layer2Input = layer1.map((weights) => {
      return math.dot(input, weights) 
    })

    let layer2 = this.weights[1]
    let final = layer2.map((weights) => {
      return math.dot(layer2Input, weights) 
    })
    console.log(final)
  }
}

const network = new Network([4, 5, 3])
network.feedForward([1, 2, 3, 4])
