import React from 'react';

export default class App extends React.Component {
    static propTypes = {
        children: React.PropTypes.element
    };
    
    render() {
        return (
            <div id="app-view">
                {this.props.children}
            </div>
        );
    }
}
