import React, { Component } from 'react';
import { Wrapper, Image, Title, MyLink } from './Card.styled';

class BandCard extends Component {
  render () {
    return (
      <Wrapper>
        <MyLink to={this.props.artist}>
          <Title>{this.props.children}</Title> 
          <Image src={this.props.image}/>
        </MyLink>
     </Wrapper>
    );
  };
};

export default BandCard;

