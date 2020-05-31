import React , { Component } from 'react';
import Network from '../neuralNetwork/Network';

import { SectionContainer , NetworkContainer } from './styles';

class Main extends Component {
  render() {
    return(
      <SectionContainer>
        <NetworkContainer>
          <Network />
        </NetworkContainer>
      </SectionContainer>
    )
  }
}

export default Main;