import React, { Component, PropTypes } from 'react';

import ModalContainer from '../../../containers/modal/Modal.container.jsx';

import '../../../assets/boot_scss/bootstrap.scss';

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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <h2 style={headerStyle}> {'<Pokémon GO|Noxwille />'} </h2>
                    </div>
                </div>
                <hr />
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
