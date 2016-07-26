import React, { Component } from 'react';

import LayoutPage from '../../components/pages/layouts/Layout.page.jsx';

class Layout extends Component {

    render() {
        return (
            <LayoutPage
                {...this.props}
                {...this.state}
            />
        );
    }
}

export default Layout;
