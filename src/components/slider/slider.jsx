import React from 'react';
// Arrow assets
import arrowLeft from './../../assets/img/slider/arrow-left.png';
import arrowRight from './../../assets/img/slider/arrow-right.png';
// import CSS
import './slider.css';

// One item component
  // selected prop will be passed
   const MenuItem = ({ text, selected, srcImg}) => {
    return (
      <div className="menu-item">
        <img src={srcImg} alt={text}/>
      </div>
    );
  };
   
  // All items component
  // Important! add unique key
  export const Menu = (list) => list.map(el => {
    const { name, thmbnailImg } = el;   
    return (
      <MenuItem text={name} key={name} srcImg={thmbnailImg}/>
    );
  });
   
   
  const Arrow = ({ imgSrc, className }) => {
    return (
      <div className={className}>
        <img src={imgSrc} alt={className}/>
      </div>
    );
  };
   
   
  export const ArrowLeft = Arrow({ imgSrc: arrowLeft, className: 'arrow-prev' });
  export const ArrowRight = Arrow({ imgSrc: arrowRight, className: 'arrow-next' });