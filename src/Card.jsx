import React, { Component } from 'react';
import { Wrapper, Image, Title } from './Card.styled';

class BandCard extends Component {
  render () {
    return (
      <Wrapper>
      <Title>
        {this.props.children}
      </Title> 
      <Image />
     </Wrapper>
    );
  };
};

export default BandCard;

