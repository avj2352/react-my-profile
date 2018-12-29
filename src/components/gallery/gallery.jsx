import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import classnames from 'classnames';
import posed from 'react-pose';
// Custom components
import { AppContext } from '../../common/AppContext';
import { Menu, ArrowLeft, ArrowRight } from './../slider/slider.jsx';
// CSS
import './gallery.css';

// Horizontal Functional Components


   
class Gallery extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selected: 0
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
                <ScrollMenu
                    data={menu}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    selected={selected}
                    onSelect={this.onSelect}/>
            </div>
        );
    }
}

Gallery.contextType = AppContext;

export default Gallery;