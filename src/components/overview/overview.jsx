import React, { Component } from 'react';
// Pose
import posed from 'react-pose';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import { AppContext } from '../../common/AppContext';
// Custom Components
import Gallery from './../gallery/gallery.jsx';
//Assets
import guitarSVG from './../../assets/svg/guitar.svg';
import laptopSVG from './../../assets/svg/laptop.svg';
// CSS
import './overview.css';

const styles = theme => ({
    fab: {
      margin: theme.spacing.unit,
      alignSelf: 'center'
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
});

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
            isVisible: true
        }
        this.showAboutMeSection = this.showAboutMeSection.bind(this);
        this.triggerGallerySection = this.triggerGallerySection.bind(this);
    }

    showAboutMeSection(e) {        
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
        const {classes} = this.props;
        return (
            <div className="overview-section">
                <Fab onClick={this.showAboutMeSection} color="secondary" aria-label="Edit" className={classes.fab}>
                    <ArrowDownward/>
                </Fab>
                <FadeIn ref={this.myRef} pose={isVisible ? 'visible' : 'hidden'}>
                    <h1>ABOUT ME</h1>
                    <section className="about-me">
                        <div className="paragraph">
                            <article>
                                <p>{this.context.overview}. <br/>
                                I also have experience with Typescript and have worked on the following frameworks: Angular JS 1.5.x, Angular2, React 16.5+, Vue 2, Node (v8+) Server side programming.<br/>
                                Currently working as <span className="highLight">{this.context.currentWork}</span></p>                
                                <div className="overview-section-files">                                    
                                    <Button href={this.context.resumeFileLocation} className="link-buttons">Download Resume</Button>
                                    <Button href={this.context.coverLetterFileLocation} className="link-buttons">Cover Letter</Button>
                                </div>
                            </article>
                            <img src={laptopSVG}/>
                        </div>
                        <div className="paragraph">
                            <img src={guitarSVG}/>
                            <article>
                                I am an avid developer for all things Javascript. 
                                I like exploring new areas in the field of Web design.                                 
                                <br/><br/>
                                When I am not working, I like to go on long walks, sketch, play Guitar / Ukulele and goof around with my son :)
                            </article>
                        </div>
                    </section>
                    <Gallery/>
                </FadeIn>
            </div>
        );
    }
}

Overview.contextType = AppContext;

Overview.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Overview);