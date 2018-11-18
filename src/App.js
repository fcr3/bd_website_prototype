import React, { Component } from 'react';
import Wrap from './components/wrap';
import {Switch, Route} from 'react-router-dom';
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Wrap}/>
          <Route exact path="/about" component={Wrap}/>
          <Route exact path="/projects" component={Wrap}/>
        </Switch>
      </div>
    );
  }
}

export default App;
