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

                <section className="ui__section">
                    <h2 className="ui__title">Typography</h2>
                    
                    <div className="ui__typography">
                        <div className="ui__typography-item">
                            <div className="ui__typography-preview">
                                <h2 className="title title--large">Abcdefgh</h2>
                            </div>

                            <div className="ui__typography-name title">Title large</div>
                            <div className="ui__typography-size">2.8 rem</div>
                            <div className="ui__typography-weight">700/bold</div>
                        </div>

                        <div className="ui__typography-item">
                            <div className="ui__typography-preview">
                                <h2 className="title title--medium">Abcdefgh</h2>
                            </div>

                            <div className="ui__typography-name title">Title medium</div>
                            <div className="ui__typography-size">2.4 rem</div>
                            <div className="ui__typography-weight">700/bold</div>
                        </div>

                        <div className="ui__typography-item">
                            <div className="ui__typography-preview">
                                <h2 className="title title--small">Abcdefgh</h2>
                            </div>

                            <div className="ui__typography-name title">Title small</div>
                            <div className="ui__typography-size">2 rem</div>
                            <div className="ui__typography-weight">700/bold</div>
                        </div>

                        <div className="ui__typography-item">
                            <div className="ui__typography-preview">
                                <h2 className="title">Abcdefgh</h2>
                            </div>

                            <div className="ui__typography-name title">Title</div>
                            <div className="ui__typography-size">1.6 rem</div>
                            <div className="ui__typography-weight">700/bold</div>
                        </div>
                    </div>

                    <div className="ui__typography">
                        <div className="ui__typography-item">
                            <div className="ui__typography-preview">
                                <p className="text">Abcdefgh</p>
                            </div>

                            <div className="ui__typography-name title">Paragraph</div>
                            <div className="ui__typography-size">1.6 rem</div>
                            <div className="ui__typography-weight">500/normal</div>
                        </div>

                        <div className="ui__typography-item">
                            <div className="ui__typography-preview">
                                <a className="link" href="#">Abcdefgh</a>
                            </div>

                            <div className="ui__typography-name title">Link</div>
                            <div className="ui__typography-size">1.6 rem</div>
                            <div className="ui__typography-weight">500/normal</div>
                        </div>
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
