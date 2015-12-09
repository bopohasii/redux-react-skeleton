import React from 'react';

import Layout, { Header, HeaderRow, HeaderTabs, Content } from 'react-mdl/lib/layout/Layout';
import Textfield from 'react-mdl/lib/Textfield';
import history   from '../../history';

export default class MainLayout extends React.Component {

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
