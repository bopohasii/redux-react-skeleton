import React, { Component } from 'react';

class UIForms extends Component{

    render() {

        return (
            <section className="ui__section">

                <h2 className="ui__title">Forms</h2>

                <article className="ui__article ui-forms">

                    <h4 className="ui__sub-title">Buttons</h4>



                    <div className="ui__btn-label">
                        <div className="item">
                            Default
                        </div>
                        <div className="item">
                            Hover
                        </div>
                        <div className="item">
                            Pressed
                        </div>
                    </div>

                    <div className="ui__btn-type">
                        <div className="item">
                            <button className="button-default">
                                Default
                            </button>
                        </div>
                        <div className="item">
                            <button className="button-default hover">
                                Default
                            </button>
                        </div>
                        <div className="item">
                            <button className="button-default pressed">
                                Default
                            </button>
                        </div>
                    </div>
                    <div className="ui__btn-type">
                        <div className="item">
                            <button className="button-primary">
                                Primary
                            </button>
                        </div>
                        <div className="item">
                            <button className="button-primary hover">
                                Primary
                            </button>
                        </div>
                        <div className="item">
                            <button className="button-primary pressed">
                                Primary
                            </button>
                        </div>
                    </div>
                    <div className="ui__btn-type">
                        <div className="item">
                            <button className="button-success">
                                Success
                            </button>
                        </div>
                        <div className="item">
                            <button className="button-success hover">
                                Success
                            </button>
                        </div>
                        <div className="item">
                            <button className="button-success pressed">
                                Success
                            </button>
                        </div>
                    </div>
                    <div className="ui__btn-type">
                        <div className="item">
                            <button className="button-danger">
                                Danger
                            </button>
                        </div>
                        <div className="item">
                            <button className="button-danger hover">
                                Danger
                            </button>
                        </div>
                        <div className="item">
                            <button className="button-danger pressed">
                                Danger
                            </button>
                        </div>
                    </div>

                    <button className="button-default">
                        Cancel
                    </button>

                </article>

            </section>
        );
    }
}

export default UIForms;
