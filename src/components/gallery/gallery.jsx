import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import classnames from 'classnames';
import posed from 'react-pose';
// Custom components
import { AppContext } from '../../common/AppContext';
import { Menu, ArrowLeft, ArrowRight } from './../slider/slider.jsx';
import { PortfolioDescription }  from './../portfolio/portfolio-description.jsx';

// CSS
import './gallery.css';

// Horizontal Functional Components


   
class Gallery extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selected: 0,
            description:'A Collection of all the Websites I have worked on'
        }
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect = key => {
        this.setState({ selected: key });
      }

    render () {
        const { selected } = this.state;
        const menu = Menu(this.props.list, selected);
        return (
            <div className="gallery-section">
                <h2>{this.props.title}</h2>
                <ScrollMenu
                    data={menu}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    selected={selected}
                    onSelect={this.onSelect}/>
                <PortfolioDescription description={this.state.description}/>
            </div>
        );
    }
}

Gallery.contextType = AppContext;

export default Gallery;