import React, { Component, PropTypes } from 'react';

import ModalContainer from '../../../containers/modal/Modal.container.jsx';

import '../../../assets/stylesheets/index.sass';

export default class LayoutPage extends Component {
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
        const { children } = this.props;
        const headerStyle = { textAlign: 'center', paddingTop: '15px' };

        return (
            <div>
                <div className="hide">
                    <h2 style={headerStyle}> {'<Pokémon GO|Noxwille />'} </h2>
                    <hr />
                </div>

                {children}

                {this.renderContainerModal()}
            </div>
        );
    }
}

LayoutPage.propTypes = {
    children: PropTypes.element,
    windowWidth: PropTypes.number,
    handleKeyDown: PropTypes.func,
    containerModalData: PropTypes.object,
    isModalOpen: PropTypes.bool,
};
