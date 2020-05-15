import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import ProjectPage from '../ProjectPage/ProjectPage';

class App extends Component {
  
  render() {
    return (
      <div className="App" id="App">
        <header className="App-header">
          <a className="anchor" href="#App">Stanley Sham</a>
          <a className="anchor" href="#about">About me</a>
          <a className="anchor" href="#skills">Skills/Technologies</a>
          <a className="anchor" href="#projects">Projects</a>
        </header>
      <Switch>
        <Route exact path = '/' render={() =>
          <MainPage/>
        }/>
        <Route exact path ='/:project' render={(match)=>
          <ProjectPage
          match = {match}
          />
        }/>
      </Switch>

      </div>
    );
  }
}

export default App;
