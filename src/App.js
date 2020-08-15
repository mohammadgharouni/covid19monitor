import React from 'react';
import logo from './logo.svg';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Chart from './views/Chart/Chart';

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/chart" component={Chart}/>
      </Switch>
  )
}

export default App;
