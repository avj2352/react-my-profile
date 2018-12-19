/**
 * PAJ - Creating a Global Shared State using Context API
 * state defined in this AppProvider will be used throughout the context of our application
 */
import React, { Component } from 'react';

export const AppContext = React.createContext();

export class AppProvider extends Component {
    constructor(){
        super();
        this.state = {
            name: 'Pramod A Jingade',
            title:'UI / UX Designer, Developer',
            overview: "8 years of experience in the field of Web design and development. Worked in Airline Industry & Health Care sector comprising Architecture, Supervisory & Project Management skills",
            currentWork: 'Currently working as UI / UX Technical Lead @ PHILIPS'

        }
    }

    componentDidMount() {
        // this.setState({header:'Happy Birthday'});
    }

    render() {
        return <AppContext.Provider value={this.state}>
            {this.props.children}
        </AppContext.Provider>
    }
}


