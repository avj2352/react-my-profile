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

// FadeIn React Pose
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
        const selectedItem = this.props.list.filter(item => item.name == key)[0];
        this.setState({ selected: selectedItem });
        this.setState({description: selectedItem.description});
      }

    
    componentDidUpdate() {
        console.log('State updated: ', this.state.selected);
        
    }

    render () {
        const { selected } = this.state;
        const menu = Menu(this.props.list, selected);
        return (
            <FadeIn className="gallery-section" pose={this.context.isGallery ? 'visible' : 'hidden'}>
                <h2>{this.props.title}</h2>
                <ScrollMenu
                    data={menu}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    selected={selected}
                    onSelect={this.onSelect}/>
                <PortfolioDescription description={this.state.description}/>
            </FadeIn>
        );
    }
}

Gallery.contextType = AppContext;

export default Gallery;