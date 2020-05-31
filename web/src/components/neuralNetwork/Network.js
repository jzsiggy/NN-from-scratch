import React , { Component } from 'react';

class Network extends Component {
  state = {
    layers: [2, 5, 1]
  }

  componentDidMount() {
    let canvas = document.querySelector("canvas");
    this.fitToContainer(canvas);
    this.draw(canvas)
  }

  circle(canvas, x, y) {
    var ctx = canvas.getContext('2d');
    var c = new Path2D();
    c.arc(x, y, 15, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill(c);
    ctx.stroke(c)
  }

  draw(canvas) {
    const height = canvas.offsetHeight;
    const width = canvas.offsetWidth;
    const numLayers = this.state.layers.length - 1;
    const layers = this.state.layers;
    
    let cx = canvas.getContext("2d");
    cx.beginPath();

    let startingX = 20;
    let delX = (width / numLayers) - (40 / numLayers)
    while (layers.length > 1) {
      let numNeurons = layers.shift();
      let nextNeurons = layers[0];
      for (let y1 = (height / (2 * numNeurons)); y1 <= height; y1 += height / numNeurons) {
        cx.globalCompositeOperation='destination-over';
        this.circle(canvas, startingX, y1)
        for (let y2 = (height / (2 * nextNeurons)); y2 < height; y2 += height / nextNeurons) {
          cx.moveTo(startingX, y1);
          cx.lineTo(startingX + delX, y2);
        }
      }
      startingX += delX;
    }
    let numNeurons = layers.shift();
    for (let y1 = (height / (2 * numNeurons)); y1 <= height; y1 += height / numNeurons) {
      this.circle(canvas, startingX, y1)
    }
    cx.stroke();
  }

  fitToContainer(canvas){
    // Make it visually fill the positioned parent
    canvas.style.width ='100%';
    canvas.style.height='100%';
    // ...then set the internal size to match
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  
  render() {
    return(
      <canvas></canvas>
    )
  }
}

export default Network;