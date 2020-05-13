import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">

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
