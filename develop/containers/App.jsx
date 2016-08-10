import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div id="app-view">
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.element,
};

export default App;
