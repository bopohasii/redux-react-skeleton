'use strict';

import React, { Component, PropTypes } from 'react';

class LayoutPage extends Component {
    static propTypes = {
        children: PropTypes.element
    };

    render() {
        const { children } = this.props;

        return (
            <div className="container-app">
                {children}
            </div>
        );
    }
}

export default LayoutPage;