import React, { Component } from 'react';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import {Switch, Route} from 'react-router-dom';
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/projects" component={Projects}/>
        </Switch>
      </div>
    );
  }
}

export default App;
