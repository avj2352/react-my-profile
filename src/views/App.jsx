import React, { Component } from 'react';
import logo from './logo.svg';
import './app.css';
// Components
import CircleLoader from './../components/circle-loader/circle-loader.jsx';
//Import context
import {AppProvider, AppContext} from './../common/AppContext';


class App extends Component {
  render() {
    const header = <AppContext.Consumer>{(context) => context.header}</AppContext.Consumer>
    return (
      <AppProvider>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <CircleLoader></CircleLoader>          
        </header>
      </div>
      </AppProvider>
    );
  }
}

App.contextType = AppContext;

export default App;
