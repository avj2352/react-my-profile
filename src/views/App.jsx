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
// Portfolio Images
import portFolioImg01 from './../assets/img/gallery/web/portfolio/img-01.png';
import portFolioImg02 from './../assets/img/gallery/web/portfolio/img-02.png';
import portFolioImg03 from './../assets/img/gallery/web/portfolio/img-03.png';
import portFolioImg04 from './../assets/img/gallery/web/portfolio/img-04.jpg';
import portFolioImg05 from './../assets/img/gallery/web/portfolio/img-05.jpg';
// list of items
const siteList = [
    { 
      name: 'item1',
      thmbnailImg: webThmb01,
      portfolioImg: portFolioImg02,
      title: 'VCS Pharmaceuticals',
      description: 'Freelance website for a pharmaceutical company. Website design in 2015. Visit - http://vcspharmaceutical.com',
    },
    { 
      name: 'item2',
      thmbnailImg: webThmb02,
      portfolioImg: portFolioImg01,
      title: 'Innovoskies',
      description: 'My Own Freelance Website. Designed in 2013. Visit - http://www.innovoskies.com',
    },
    { 
      name: 'item3',
      thmbnailImg: webThmb03,
      portfolioImg: portFolioImg03,
      title: 'Power Ministry',
      description: 'NGO site located in America Keswick. Designed in 2012. Visit - http://www.powerministry.info',
    },
    { 
      name: 'item4',
      thmbnailImg: webThmb04,
      portfolioImg: portFolioImg04,
      title: 'Trinity Hospital',
      description: 'First Website design for a Hospital / Health Care site in 2012. Visit - http://www.trinityhospitalbangalore.in/',
    },
    { 
      name: 'item5',
      thmbnailImg: webThmb05,
      portfolioImg: portFolioImg05,
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
