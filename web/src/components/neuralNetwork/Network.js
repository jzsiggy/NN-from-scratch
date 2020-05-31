import React , { Component } from 'react';

class Network extends Component {
  
  componentDidMount() {
    let canvas = document.querySelector("canvas");
    let context = canvas.getContext("2d");
    context.fillStyle = "red";
    context.fillRect(10, 10, 100, 50);
  }
  
  render() {
    return(
      <canvas width={120} height={60}>

      </canvas>
    )
  }
}

export default Network;