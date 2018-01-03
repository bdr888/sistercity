import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppWrapper, Wrapper } from './App.styled';
import Header from './Header';
import Home from './Home';
import Artist from './Artist';

const App = () => (
  <Wrapper>
    <Header />
    <AppWrapper>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/HundredsOfThem" component={Artist} />
        <Route path="/CreamYouPlease" component={Artist} />
        <Route path="/iamartiste" component={Artist} />
        <Route path="/3CardMonty" component={Artist} />
        <Route path="/SmileForMyCamera" component={Artist} />
        <Route path="/LeftOnMaple" component={Artist} />
      </Switch>
    </AppWrapper>
  </Wrapper>
);

export default App;
