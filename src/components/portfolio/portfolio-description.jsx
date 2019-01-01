import React from 'react';
import './portfolio-description.css';

// All items component
  // Important! add unique key
  export const PortfolioDescription = (data) => {
    let content =  '';    
    if (typeof(data.details) == 'object') {
      content = <div className="portfolio">
                  <h1 className="portfolio-title">{data.details.title}</h1>
                  <p className="portfolio-description">{data.details.description}</p>
                  <img className="portfolio-image"/>
                </div>
    } else {
      content = <div className="portfolio">
                  <p className="portfolio-description">{data.details}</p>          
                </div>
    }
    return (content);
  };
