import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component {
    static propTypes = {
        children: React.PropTypes.element
    };
    
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
