const { dataGen } = require('./dataGenerator');
const { Network } = require('./Network');

const network = new Network([2, 5, 1]);
const { x , y } = dataGen(10000);

network.train({ input: x, output: y, epochs: 1 });

console.log(network.predict([0.5, 0.01]))