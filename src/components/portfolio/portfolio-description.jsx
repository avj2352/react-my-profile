import React from 'react';
import './portfolio-description.css';

// All items component
  // Important! add unique key
  export const PortfolioDescription = ({ description}) => {    
    return (
      <div className="portfolio-description">
        {description}
      </div>
    );
  };
