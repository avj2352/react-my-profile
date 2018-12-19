import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Components
import CircleLoader from './../components/circle-loader/circle-loader.jsx';
//Context
import {AppProvider, AppContext} from './../common/AppContext';
// Material Components
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


class App extends Component {
  render() {
    const header = <AppContext.Consumer>{(context) => context.header}</AppContext.Consumer>
    return (
      <AppProvider>
      <div className="page">
        <div className="app">        
            <h1 className="app-header">Hi, I am <span className="highLight">PRAMOD JINGADE</span></h1>                  
            <CircleLoader></CircleLoader>          
            <h2 className="app-subtitle">Avid UI / UX Designer, based in Bangalore</h2>
        </div>      
        <Button variant="contained" color="secondary" className="medium-size">ABOUT ME</Button>
      </div>
      </AppProvider>
    );
  }
}

App.contextType = AppContext;

export default App;
