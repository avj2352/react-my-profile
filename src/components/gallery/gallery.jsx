import React, { useEffect, useState } from 'react';
import posed from 'react-pose';
import classnames from 'classnames';
import { AppContext } from '../../common/AppContext';
import { getGalleryData } from './../../common/firedb';
//CSS and assets
import './gallery.css';
import ellipsisLoader from './../../assets/svg/ellipsis-loader.svg';

const Gallery  = (props) => {
    //useState
    const [galleryList, setGalleryList] = useState({});
    //useEffect()
    useEffect(()=>{
        getGalleryData().then((res)=>{
            console.log('Response is: ', res);
            setGalleryList(res);
        });
    },[]); // componentDidMount

    return(
        <div>
            <div className="gallery-section">            
            <h1>SEE MY WORK</h1>
            <img src={ellipsisLoader}/>
            {/* <Card details = {}/> */}
        </div>
        </div>
        
    );
}

export default Gallery;