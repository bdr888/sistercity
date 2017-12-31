import React, { Component } from 'react';
import { Wrapper, Image, Title, MyLink } from './Card.styled';

class BandCard extends Component {
  render () {
    return (
      <Wrapper>
        <MyLink to={this.props.artist}>
          <Image src={this.props.image}/>
          <Title>{this.props.children}</Title> 
        </MyLink>
     </Wrapper>
    );
  };
};

export default BandCard;

