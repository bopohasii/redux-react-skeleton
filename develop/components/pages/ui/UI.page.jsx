import React, { Component, PropTypes } from 'react';

import ModalContainer from '../../../containers/modal/Modal.container.jsx';
import UIColor from './UI.color.jsx';
import UITypography from './UI.typography.jsx';
import UINavigation from './UI.navigation.jsx';
import UIBreadcrumbs from './UI.breadcrumbs.jsx';


import '../../../assets/stylesheets/index.sass';


class UIPage extends Component{
    renderContainerModal() {
        const { windowWidth, isModalOpen, containerModalData, handleKeyDown } = this.props;

        return !isModalOpen
            ? null
            : (
            <ModalContainer
                onKeyDown={handleKeyDown}
                windowWidth={windowWidth}
                containerModalData={containerModalData}
            />
        );
    }

    render() {

        return (
            <div className="ui-style-guide">

                <header className="ui__header">
                    <h1>UI Style Guide</h1>
                    Version 1.0
                </header>

                <UIColor />

                <UITypography />

                <UINavigation />

                <UIBreadcrumbs />

                <div className="ui__section">
                    <div className="ui__title">Pagination</div>

                    <div className="pagination-container">
                        <ul className="pagination">
                            <li className="pagination__item">
                                <a href="#" className="pagination__link disabled">«</a>
                            </li>
                            <li className="pagination__item">
                                <a href="#" className="pagination__link active">1</a>
                            </li>
                            <li className="pagination__item">
                                <a href="#" className="pagination__link">2</a>
                            </li>
                            <li className="pagination__item">
                                <a href="#" className="pagination__link disabled">...</a>
                            </li>
                            <li className="pagination__item">
                                <a href="#" className="pagination__link">4</a>
                            </li>
                            <li className="pagination__item">
                                <a href="#" className="pagination__link">5</a>
                            </li>
                            <li className="pagination__item">
                                <a href="#" className="pagination__link">»</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="ui__section">
                    <div className="ui__title">Pager</div>

                    <div className="pager-container">
                        <ul className="pager">
                            <li className="pager__item">
                                <a href="#" className="pager__link">Previous</a>
                            </li>
                            <li className="pager__item">
                                <a href="#" className="pager__link">Next</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {this.renderContainerModal()}

            </div>
        );
    }
}

UIPage.propTypes = {
    children: PropTypes.element,
    windowWidth: PropTypes.number,
    handleKeyDown: PropTypes.func,
    containerModalData: PropTypes.object,
    isModalOpen: PropTypes.bool,
};


export default UIPage;
