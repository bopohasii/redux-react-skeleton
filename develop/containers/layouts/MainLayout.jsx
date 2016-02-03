'use strict';

import React   from 'react';
import history from '../../config/appHistory';

class MainLayout extends React.Component {

    handleTabClick(type) {
        history.push(null, `/${type}`);
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default MainLayout;