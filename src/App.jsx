import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { AppWrapper, Wrapper } from './App.styled';
import Header from './Header';
import Home from './Home';
import Artist from './Artist';
import { Footer } from './Footer.styled';
import Data from './data';

const artists = Data.bands;

const App = withRouter(({ location }) => {
  const timeout = { enter: 1000, exit: 1000 };

  return (
    <Wrapper>
      <Header />
      <TransitionGroup component="main" className="page-main">
        <CSSTransition key={location.key} timeout={timeout} classNames="fade" appear>
          <AppWrapper>
            <Route
              // location={location}
              timeout={timeout}
              exact
              path="/"
              component={Home}
            />
            <Route
              // location={location}
              timeout={timeout}
              path="/artists/:artistId"
              render={({ match }) => (
                <Artist artist={artists.find(artist => artist.url === match.params.artistId)} />
              )}
            />
            <Route
              timeout={timeout}
              exact
              path="/"
              render={() => (
                <div>
                  <Footer>Punk rock music from Golden, Colorado.</Footer>
                </div>
              )}
            />
          </AppWrapper>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
});

export default App;
