import React, { Component } from 'react';

class UITypography extends Component{

    render() {

        return (
            <section className="ui__section">
                <h2 className="ui__title">Typography</h2>

                <div className="ui__typography">
                    <div className="ui__typography-item">
                        <div className="ui__typography-preview">
                            <h2 className="title">Abcdefgh</h2>
                        </div>

                        <div className="ui__typography-name title">Title</div>
                        <div className="ui__typography-size">1.6 rem</div>
                        <div className="ui__typography-weight">700/bold</div>
                    </div>

                    <div className="ui__typography-item">
                        <div className="ui__typography-preview">
                            <h2 className="sub-title">Abcdefgh</h2>
                        </div>

                        <div className="ui__typography-name title">Sub-title</div>
                        <div className="ui__typography-size">1.6 rem</div>
                        <div className="ui__typography-weight">500/bold</div>
                    </div>

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
        );
    }
}

export default UITypography;
