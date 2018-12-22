import React, {Component} from 'react';
//Pose
import posed from 'react-pose';
//CSS
import './circle-loader.css';
// SVG
import blueSemiCircleSVG from './../../assets/svg/blue-semi.svg';
import blueCircleSVG from './../../assets/svg/blue.svg';
import greenSemiCircleSVG from './../../assets/svg/green-semi.svg';
import greenCircleSVG from './../../assets/svg/green.svg';
import yellowSemiCircleSVG from './../../assets/svg/yellow-semi.svg';
import yellowCircleSVG from './../../assets/svg/yellow.svg';
import orangeSemiCircleSVG from './../../assets/svg/orange-semi.svg';
import orangeCircleSVG from './../../assets/svg/orange.svg';
import redSemiCircleSVG from './../../assets/svg/red-semi.svg';
import redCircleSVG from './../../assets/svg/red.svg';
import backgroundCircleSVG from './../../assets/svg/background-circle.svg';
import profileImage from './../../assets/img/pramod-profile.jpg';

// import context
import { AppContext } from '../../common/AppContext';


// Creates a Wrappable component
const FadeIn = posed.div({
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { 
            duration: 1000,
            ease: 'easeInOut'
        }
    },
});

class CircleLoader extends Component {
    constructor(props,context) {
        super(props,context);

        this.state = {
            isVisible: false,
            counter: 0,
            total: 11
        }

        this.fadeInCircles = this.fadeInCircles.bind(this);
    }    

    fadeInCircles() {        
        this.setState((prev)=>({counter:prev.counter+1}));
        if(this.state.counter == this.state.total) {
            this.setState({isVisible:true});
        }
    }

    render() {
        const { isVisible } = this.state;
        return (
            <FadeIn className="circle-loader" pose={isVisible ? 'visible' : 'hidden'}>            
                <img onLoad={this.fadeInCircles} className="background-circle" src={backgroundCircleSVG} alt="background-circle"/>
                <img onLoad={this.fadeInCircles} className="blue-semi-circle" src={blueSemiCircleSVG} alt="blue-semi-circle"/>
                <img onLoad={this.fadeInCircles} className="blue-circle" src={blueCircleSVG} alt="blue-circle"/>
                <img onLoad={this.fadeInCircles} className="green-semi-circle" src={greenSemiCircleSVG} alt="green-semi-circle"/>
                <img onLoad={this.fadeInCircles} className="green-circle" src={greenCircleSVG} alt="green-circle"/>
                <img onLoad={this.fadeInCircles} className="yellow-semi-circle" src={yellowSemiCircleSVG} alt="yellow-semi-circle"/>
                <img onLoad={this.fadeInCircles} className="yellow-circle" src={yellowCircleSVG} alt="yellow-circle"/>
                <img onLoad={this.fadeInCircles} className="orange-semi-circle" src={orangeSemiCircleSVG} alt="orange-semi-circle"/>
                <img onLoad={this.fadeInCircles} className="orange-circle" src={orangeCircleSVG} alt="orange-circle"/>
                <img onLoad={this.fadeInCircles} className="red-semi-circle" src={redSemiCircleSVG} alt="red-semi-circle"/>
                <img onLoad={this.fadeInCircles} className="red-circle" src={redCircleSVG} alt="red-circle"/>
                <img onLoad={this.fadeInCircles} className="profile-image" src={profileImage} alt="profile"/>            
            </FadeIn>
        );
    }

}

CircleLoader.contextType = AppContext;

export default CircleLoader;