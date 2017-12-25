import React, { Component } from 'react';
import { Wrapper, Header, Intro, Title } from './App.styled';
import Main from './Main';
// import BandCard from './Card';
// import { Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Title>Sombrero Records</Title>
        </Header>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
          <Main />
      </Wrapper>
    );
  }
}

export default App;

// <Body>
// <BandCard> Left on Maple </BandCard>
// <BandCard> iamartiste </BandCard>
// <BandCard> Smile for My Camera </BandCard>
// <BandCard> 3 Card Monty </BandCard>
// <BandCard> Cream/You Please </BandCard>
// <BandCard> Hundreds of Them </BandCard>
// <BandCard> Say What They Mean </BandCard>
// </Body>