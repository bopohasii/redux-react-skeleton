import React, { Component, PropTypes } from 'react';

import ModalContainer from '../../../containers/modal/Modal.container.jsx';

import '../../../assets/stylesheets/index.sass';

export default class UIPage extends Component {
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

                <section className="ui__section">

                    <h2 className="ui__title">Colors Palette</h2>



                    <div className="ui__color"></div>
                    <div className="ui__color-code-hex"></div>
                    <div className="ui__color-code-rgba"></div>


                </section>







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
