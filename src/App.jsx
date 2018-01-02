import React, { Component } from 'react';
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
        {/* <Route exact path='/' component={App}/> */}
        <Route path="/home" component={Home} />
        <Route path="/HundredsOfThem" component={Artist} />
        {/* <Route path='/CreamYouPlease' component={HundredsOfThem}/>
            <Route path='/iamartiste' component={HundredsOfThem}/>
            <Route path='/3CardMonty' component={HundredsOfThem}/>
            <Route path='/SmileForMyCamera' component={HundredsOfThem}/>
            <Route path='/LeftOnMaple' component={HundredsOfThem}/> */}
      </Switch>
    </AppWrapper>
  </Wrapper>
);

export default App;
