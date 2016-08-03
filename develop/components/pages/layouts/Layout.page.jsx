'use strict';

import React, { Component, PropTypes } from 'react';
import '../../../assets/boot_scss/bootstrap.scss';

class LayoutPage extends Component {
    render() {
        const { children } = this.props;
        const headerStyle = { textAlign: 'center', paddingTop: '15px' };

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <h2 style={headerStyle}> {'<Pokémon GO|Noxwille />'} </h2>
                    </div>
                </div>
                <hr />
                {children}
            </div>
        );
    }
}

LayoutPage.propTypes = {
    children: PropTypes.element,
};

export default LayoutPage;