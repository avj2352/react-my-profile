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
            isVisible: false
        }
    }

    componentDidMount() {
        // Show visibility after one sec
        setTimeout(()=>{
            this.setState({isVisible: !this.state.isVisible});
        },1000);
    }

    render() {
        const { isVisible } = this.state;
        return (
            <FadeIn className="circle-loader" pose={isVisible ? 'visible' : 'hidden'}>            
                <img className="background-circle" src={backgroundCircleSVG} alt="background-circle"/>
                <img className="blue-semi-circle" src={blueSemiCircleSVG} alt="blue-semi-circle"/>
                <img className="blue-circle" src={blueCircleSVG} alt="blue-circle"/>
                <img className="green-semi-circle" src={greenSemiCircleSVG} alt="green-semi-circle"/>
                <img className="green-circle" src={greenCircleSVG} alt="green-circle"/>
                <img className="yellow-semi-circle" src={yellowSemiCircleSVG} alt="yellow-semi-circle"/>
                <img className="yellow-circle" src={yellowCircleSVG} alt="yellow-circle"/>
                <img className="orange-semi-circle" src={orangeSemiCircleSVG} alt="orange-semi-circle"/>
                <img className="orange-circle" src={orangeCircleSVG} alt="orange-circle"/>
                <img className="red-semi-circle" src={redSemiCircleSVG} alt="red-semi-circle"/>
                <img className="red-circle" src={redCircleSVG} alt="red-circle"/>
                <img className="profile-image" src={profileImage} alt="profile"/>            
            </FadeIn>
        );
    }

}

export default CircleLoader;