import React from 'react';
import { Route } from 'react-router-dom';
import { AppWrapper, Wrapper } from './App.styled';
import Header from './Header';
import Home from './Home';
import Artist from './Artist';
import { Footer, Illustrations } from './Footer.styled';
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
        <div>
          <Footer>A history of punk rock music from Golden, Colorado.</Footer>
          <Illustrations>
            <div>
            Illustrations by <a href="http://racheljablonski.com/" target="_blank" rel="noopener noreferrer">Rachel Jablonski </a>
            </div>
          </Illustrations>
        </div>
      )}
    />
  </Wrapper>
);

export default App;
