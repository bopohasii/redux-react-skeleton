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

                    <div className="ui__color ui__color-text">
                        <pre className="ui__color-name">
                            $color-text
                        </pre>
                        <div className="ui__color-code-hex"></div>
                        <div className="ui__color-code-rgba"></div>
                    </div>

                    <div className="ui__color ui__color-link">
                        <pre className="ui__color-name">
                            $color-link
                        </pre>
                        <div className="ui__color-code-hex"></div>
                        <div className="ui__color-code-rgba"></div>
                    </div>

                    <div className="ui__color ui__color-red">
                        <pre className="ui__color-name">
                            $color-red
                        </pre>
                        <div className="ui__color-code-hex"></div>
                        <div className="ui__color-code-rgba"></div>
                    </div>

                    <div className="ui__color ui__color-green">
                        <pre className="ui__color-name">
                            $color-green
                        </pre>
                        <div className="ui__color-code-hex"></div>
                        <div className="ui__color-code-rgba"></div>
                    </div>

                    <div className="ui__color ui__color-blue">
                        <pre className="ui__color-name">
                            $color-blue
                        </pre>
                        <div className="ui__color-code-hex"></div>
                        <div className="ui__color-code-rgba"></div>
                    </div>

                    <div className="ui__color ui__color-orange">
                        <pre className="ui__color-name">
                            $color-orange
                        </pre>
                        <div className="ui__color-code-hex"></div>
                        <div className="ui__color-code-rgba"></div>
                    </div>


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
