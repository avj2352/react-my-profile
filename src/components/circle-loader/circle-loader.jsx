import React, {Component} from 'react';
import { AppContext } from '../../common/AppContext';
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

class CircleLoader extends Component {
    constructor(props,context) {
        super(props,context);
    }

    render() {
        return (
            <div className="circle-loader">
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
            </div>
        );
    }

}

CircleLoader.contextType = AppContext;

export default CircleLoader;