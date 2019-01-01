import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Components
import CircleLoader from './../components/circle-loader/circle-loader.jsx';
import Overview from './../components/overview/overview.jsx';
import Gallery from './../components/gallery/gallery.jsx';
//Context
import {AppProvider, AppContext} from './../common/AppContext';
// Thmbnail Images
import webThmb01 from './../assets/img/gallery/web/thmbnails/img-01.png';
import webThmb02 from './../assets/img/gallery/web/thmbnails/img-02.png';
import webThmb03 from './../assets/img/gallery/web/thmbnails/img-03.png';
import webThmb04 from './../assets/img/gallery/web/thmbnails/img-04.png';
import webThmb05 from './../assets/img/gallery/web/thmbnails/img-05.png';
// Gallery 1
// list of items
const siteList = [
    { 
      name: 'item1',
      thmbnailImg: webThmb01,
      portfolioImg: '',
      title: 'VCS Pharmaceuticals',
      description: 'Freelance website for a pharmaceutical company. Visit - http://www.http://vcspharmaceutical.com',
    },
    { 
      name: 'item2',
      thmbnailImg: webThmb02,
      portfolioImg: '',
      title: 'Innovoskies',
      description: 'My Own Freelance Website. Visit - http://www.innovoskies.com',
    },
    { 
      name: 'item3',
      thmbnailImg: webThmb03,
      portfolioImg: '',
      title: 'Power Ministry',
      description: 'NGO site located in America Keswick. Visit - http://www.powerministry.info',
    },
    { 
      name: 'item4',
      thmbnailImg: webThmb04,
      portfolioImg: '',
      title: 'Trinity Hospital',
      description: 'First Website design for a Hospital / Health Care site in 2012. Visit - http://www.trinityhospitalbangalore.in/',
    },
    { 
      name: 'item5',
      thmbnailImg: webThmb05,
      portfolioImg: '',
      title: 'VSS Public School',
      description: 'VSS Public School. Design this site in 2013',
    }  
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
          <Gallery title='Websites' list={siteList}/> 
      </div>
      </AppProvider>
    );
  }
}

App.contextType = AppContext;

export default App;
