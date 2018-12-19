import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Components
import CircleLoader from './../components/circle-loader/circle-loader.jsx';
//Import context
import {AppProvider, AppContext} from './../common/AppContext';


class App extends Component {
  render() {
    const header = <AppContext.Consumer>{(context) => context.header}</AppContext.Consumer>
    return (
      <AppProvider>
      <div className="app">        
          <h1 className="app-header">Hi, I am <span className="highLight">PRAMOD JINGADE</span></h1>                  
          <CircleLoader></CircleLoader>          
          <h2 className="app-subtitle">Avid UI / UX Designer, based in Bangalore</h2>
      </div>
      </AppProvider>
    );
  }
}

App.contextType = AppContext;

export default App;
