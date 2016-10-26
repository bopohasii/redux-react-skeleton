import React, { Component } from 'react';

class UIBreadcrumbs extends Component{

    render() {

        return (
            <section className="ui__section">
                <div className="ui__title">Breadcrumbs</div>

                <ul className="breadcrumbs">
                    <li className="breadcrumbs__item">
                        <a href="#" className="breadcrumbs__link">Home</a>
                    </li>
                    <li className="breadcrumbs__item">
                        <a href="#" className="breadcrumbs__link">Library</a>
                    </li>
                    <li className="breadcrumbs__item active">
                        <span className="breadcrumbs_text">Data</span>
                    </li>
                </ul>
            </section>
        );
    }
}

export default UIBreadcrumbs;
