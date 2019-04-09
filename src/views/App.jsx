import React, { Component } from 'react';
import './App.css';
// Components
import CircleLoader from './../components/circle-loader/circle-loader.jsx';
import Overview from './../components/overview/overview.jsx';
import Gallery from './../components/gallery/gallery.jsx';
//Context
import {AppProvider, AppContext} from './../common/AppContext';
//ScrollReveal
import withScrollReveal from 'react-scrollreveal';

const SCROLL_REVEAL_CONFIG = [
  {
    selector: '.app-header',
    options: {
      reset: true,
      delay:800
    },    
  },
  {
    selector: '.heading',
    options: {
      reset: true,
      delay: 800,
    },
    interval: 100
  }
];

// list of items
class App extends Component {
  render() {
    const name = <AppContext.Consumer>{(context) => context.name}</AppContext.Consumer>
    const title = <AppContext.Consumer>{(context) => context.title}</AppContext.Consumer>
    const place = <AppContext.Consumer>{(context) => context.place}</AppContext.Consumer>
    return (
      <AppProvider>
      <div className="page">
        <div className="app">        
            <h1 className="app-header">Hi, I am <span className="highLight">{name}</span></h1>                  
            <CircleLoader></CircleLoader>          
            <h2 className="heading">{title}</h2>
            <h2 className="heading">based in <span className="highLight">{place}</span></h2>
        </div>              
          <Overview/>                     
      </div>
      </AppProvider>
    );
  }
}

App.contextType = AppContext;

export default withScrollReveal(SCROLL_REVEAL_CONFIG)(App);
