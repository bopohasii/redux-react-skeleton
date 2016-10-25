import React, { Component, PropTypes } from 'react';

import ModalContainer from '../../../containers/modal/Modal.container.jsx';

import UIColor from './UI.color.jsx';
import UITypography from './UI.typography.jsx';
import UINavigation from './UI.navigation.jsx';
import UIBreadcrumbs from './UI.breadcrumbs.jsx';
import UIForms from './UI.forms.jsx';


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

                <UIForms />

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
