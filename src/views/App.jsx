import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Components
import CircleLoader from './../components/circle-loader/circle-loader.jsx';
import Overview from './../components/overview/overview.jsx';
import Gallery from './../components/gallery/gallery.jsx';
//Context
import {AppProvider, AppContext} from './../common/AppContext';
// Material Components

// Gallery 1
// list of items
const list = [
  { name: 'item1' },
  { name: 'item2' },
  { name: 'item3' },
  { name: 'item4' },
  { name: 'item5' },
  { name: 'item6' },
  { name: 'item7' },
  { name: 'item8' },
  { name: 'item9' }
];

class App extends Component {
  render() {
    const name = <AppContext.Consumer>{(context) => context.name}</AppContext.Consumer>
    const title = <AppContext.Consumer>{(context) => context.title}</AppContext.Consumer>
    return (
      <AppProvider>
      <div className="page">
        <div className="app">        
            <h1 className="app-header">Hi, I am <span className="highLight">{name}</span></h1>                  
            <CircleLoader></CircleLoader>          
            <h2>{title}</h2>
            <h2>based in <span className="highLight">Bangalore</span></h2>
        </div>              
          <Overview/>       
          <Gallery list={list}/> 
      </div>
      </AppProvider>
    );
  }
}

App.contextType = AppContext;

export default App;
