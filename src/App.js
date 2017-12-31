import React, { Component } from 'react';
import { AppWrapper, Wrapper } from './App.styled';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import HundredsOfThem from './HundredsOfThem';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header/>
        <AppWrapper>
        <Switch>
          {/* <Route exact path='/' component={App}/> */}
          <Route path='/home' component={Home}/>
          <Route path='/HundredsOfThem' component={HundredsOfThem}/>
        </Switch>
        </AppWrapper>
      </Wrapper>
    );
  }
}

export default App;
