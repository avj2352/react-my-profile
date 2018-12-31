import React, { Component } from 'react';
// Pose
import posed from 'react-pose';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { AppContext } from '../../common/AppContext';
// CSS
import './overview.css';

// Creates a Wrappable component
const FadeIn = posed.div({
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { 
            duration: 1500,
            ease: 'easeInOut'
        }
    },
});

class Overview extends Component {
    constructor(props,context) {
        super(props,context);
        this.myRef = React.createRef(); // Create a Ref object
        this.state = {
            isVisible: false
        }
        this.showAboutMeSection = this.showAboutMeSection.bind(this);
        this.triggerGallerySection = this.triggerGallerySection.bind(this);
    }

    showAboutMeSection(e) {
        this.setState({isVisible:true});
        window.scrollTo({
            top:this.myRef.current.offsetTop, 
            behavior: "smooth"  // Optional, adds animation
        })
    }

    triggerGallerySection() {
        const gallery = this.context.showGallery();
        console.log('Triggering context', gallery);
    }

    render() {
        const {isVisible} = this.state;
        return (
            <div className="overview-section">
                <Button onClick={this.showAboutMeSection} variant="contained" color="secondary" className="medium-size">ABOUT ME</Button>
                <FadeIn ref={this.myRef} className="about-me" pose={isVisible ? 'visible' : 'hidden'}>
                    <p>{this.context.overview}</p>
                    <p>{this.context.currentWork}</p>                
                    <Button onClick={this.triggerGallerySection} variant="contained" color="secondary" className="medium-size">MY WORKS</Button>
                </FadeIn>
            </div>
        );
    }
}

Overview.contextType = AppContext;

export default Overview;