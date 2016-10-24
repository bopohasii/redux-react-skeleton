import React, { Component, PropTypes } from 'react';

class UIColorSection extends Component{

    render() {

        return (
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
        );
    }
}

export default UIColorSection;
