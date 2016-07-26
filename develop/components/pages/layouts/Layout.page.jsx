'use strict';

import React, { Component, PropTypes } from 'react';
import '../../../assets/boot_scss/bootstrap.scss';

class LayoutPage extends Component {
    static propTypes = {
        children: PropTypes.element
    };

    render() {
        const { children } = this.props;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <h2 className="text-center"> {'<Pokémon GO|Noxwille />'} </h2>
                    </div>
                </div>
                <hr/>
                {children}
            </div>
        );
    }
}

export default LayoutPage;