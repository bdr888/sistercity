import React from 'react';
import { Route } from 'react-router-dom';
import { AppWrapper, Wrapper } from './App.styled';
import Header from './Header';
import Home from './Home';
import Artist from './Artist';
import Footer from './Footer.styled';
import Data from './data';

const artists = Data.bands;

const App = () => (
  <Wrapper>
    <Header />
    <AppWrapper>
      <Route exact path="/" component={Home} />
      <Route
        path="/artists/:artistId"
        render={({ match }) => (
          <Artist artist={artists.find(artist => artist.url === match.params.artistId)} />
        )}
      />
    </AppWrapper>
    <Route
      exact
      path="/"
      render={() => (
        <Footer>Punk rock music from Golden, CO.</Footer>
      )}
    />
  </Wrapper>
);

export default App;


/* <Route path="/HundredsOfThem" component={Artist} />
     <Route path="/CreamYouPlease" component={Artist} />
        <Route path="/iamartiste" component={Artist} />
        <Route path="/3CardMonty" component={Artist} />
        <Route path="/SmileForMyCamera" component={Artist} />
        <Route path="/LeftOnMaple" component={Artist} /> */
