'use strict';

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div id="app-view">
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}
