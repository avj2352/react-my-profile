/**
 * PAJ - Creating a Global Shared State using Context API
 * state defined in this AppProvider will be used throughout the context of our application
 */
import React, { Component } from 'react';
import { getProfileData } from './firedb';


export const AppContext = React.createContext();

export class AppProvider extends Component {
    constructor(){
        super();
        this.state = {
            name: 'Pramod AJ',
            title:'Designer',
            overview: 'I design everything React JS',
            currentWork: 'Working @ PHILIPS',
            place: 'Bangalore',
            isLoaded:false,
            isGallery : false,            
            showGallery: ()=> {
                this.setState({isGallery : true});                
            }
        }
    }

    componentDidMount() {
        // console.log('Retrieving from FireDB');
        const dataPromise = getProfileData();
        dataPromise.then(data => {
            this.setState(
                {
                    name:data.name,
                    title:data.title,
                    overview:data.overview,
                    currentWork:data.currentWork,
                    place: data.place,
                    isLoaded:true
                }
            );
        })
        .catch(error => {
            console.log('Error response is: ', error);
        })
    }

    componentDidUpdate() {
        // console.log('Gallery value: ', this.state.isGallery);
    }

    render() {
        return <AppContext.Provider value={this.state}>
            {this.props.children}
        </AppContext.Provider>
    }
}


