import React, { useEffect, useState } from 'react';
import Card from './../card/Card';
import Fab from '@material-ui/core/Fab';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { withStyles } from '@material-ui/core/styles';
import posed from 'react-pose';
import classnames from 'classnames';
import { AppContext } from '../../common/AppContext';
import { getGalleryData } from './../../common/firedb';
import axios from 'axios';
//CSS and assets
import './gallery.css';
import ellipsisLoader from './../../assets/svg/ellipsis-loader.svg';

const styles = theme => ({
    fab: {
      margin: theme.spacing.unit,
      alignSelf: 'center'
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
});


const Gallery  = (props) => {
    //useState
    const [galleryList, setGalleryList] = useState([]);
    const [property, setProperty] = useState({});
    const [isLoaded, setLoaded] = useState(false);

    const prevProperty = () => {
        const newIdx = property.index-1;
        console.log('Prev button pressed! Index: ', newIdx);
        setProperty(galleryList[newIdx]);
    };

    const nextProperty = () => {
        const newIdx = property.index+1;
        console.log('Next button pressed! Index: ', newIdx);
        setProperty(galleryList[newIdx]);
    };
    

    
    //useEffect()
    useEffect(()=>{
        getGalleryData().then((res)=>{
            // console.log('Response is: ', res);
            const gList = [];
            let count = 0;
            for(let idx in res){
                gList.push({
                    index: count,
                    name: res[idx].name,
                    description: res[idx].description,                    
                    group: res[idx].group,
                    link: res[idx].link,
                    thumbnail: res[idx].thumbnail,
                    skills: res[idx].skills
                });
                count++;
            }
            setGalleryList(gList);
            setProperty(gList[0]);
            setTimeout(()=>{
                setLoaded(true);
            },5000);
        });
    },[]); // componentDidMount

    //classnames
    const imageLoaderClass = classnames({
        'loader':true,
        'loader-visible': !isLoaded,
        'loader-hidden': isLoaded
    });
    const slideShowClass = classnames({
        'image-slideshow': true,
        'image-slideshow-visible': isLoaded,
        'image-slideshow-hidden': !isLoaded
    });

    const {classes} = props;
    // console.log(galleryList);
    return(
        <div>
            <div className="gallery-section">            
            <h1>SEE MY WORK</h1>
            <img className={imageLoaderClass} src={ellipsisLoader}/>
            {/* <Card details = {}/> */}
            <div className={slideShowClass}>
                <div className="navigation">
                    <Fab disabled={property.index === 0} onClick={prevProperty} color="secondary" aria-label="Previous" className={classes.fab}>
                        <ArrowBack/>
                    </Fab>
                </div>
                <div className="slideshow-content">
                    
                    <div className={`cards-slider active-slide-${property.index}`}>
                        <div className="cards-slider-wrapper" style={{
                            'transform': `translateX(-${property.index*(100/galleryList.length)}%)`
                        }}>
                        {galleryList.map(property => {
                            return <Card key={property.index} property={property}></Card>
                        })}
                        </div>
                    </div>
                </div>
                <div className="navigation">
                    <Fab disabled={property.index === galleryList.length-1} onClick={nextProperty} color="secondary" aria-label="Next" className={classes.fab}>
                        <ArrowForward/>
                    </Fab>
                </div>
            </div>
            <div className="card-info">
                {(property.name && isLoaded) ? <p>Visit site: <a target="_blank" href={property.link}>Click Here... ({property.name})</a></p> : <p>Loading...</p>}
                {(property.skills && isLoaded) ? <p>Done using: <span className="gold-highlight">{property.skills}</span></p> : ''}
            </div>
        </div>
        </div>
        
    );
}

export default withStyles(styles)(Gallery);