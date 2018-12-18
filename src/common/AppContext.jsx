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
            header: 'My Profile',
            subHeader: 'Back side of the card'
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


