import React, { Component } from 'react';

class UIForms extends Component{

    render() {

        return (
            <section className="ui__section">

                <h2 className="ui__title">Forms</h2>

                <article className="ui__article ui-forms">

                    <h4 className="ui__sub-title">Elements</h4>


                    <div className="">

                        <input type="text" placeholder="Input text"/>

                        <ul className="ui__form-list">
                            <li className="ui__form-font-family"></li>
                            <li className="ui__form-font-size"></li>
                            <li className="ui__form-line-height"></li>
                            <li className="ui__form-padding"></li>
                            <li className="ui__form-border"></li>
                            <li className="ui__form-color"></li>
                            <li className="ui__form-height"></li>
                        </ul>



                    </div>



                </article>

                <article className="ui__article ui-forms">

                    <h4 className="ui__sub-title">Elements</h4>


                    <div className="grid">

                        <div className="item-row">
                            <label className="label-row">Label input</label>
                            <div className="indent-row">
                                <input type="text" className="" />
                            </div>
                        </div>

                        <div className="item-row">
                            <label className="label-row">Select</label>
                            <div className="indent-row">
                                <select>
                                    <option>Select 1</option>
                                </select>
                            </div>
                        </div>

                        <div className="item-row">
                            <label className="label-row">Select</label>
                            <div className="indent-row">
                                <textarea className=""></textarea>
                            </div>
                        </div>

                    </div>


                </article>


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

                    <div className="ui__btn-type">
                        <div className="item">
                            <button className="button-cancel">
                                Cancel
                            </button>
                        </div>
                        <div className="item">
                            <button className="button-cancel hover">
                                Cancel
                            </button>
                        </div>
                        <div className="item">
                            <button className="button-cancel pressed">
                                Cancel
                            </button>
                        </div>
                    </div>



                </article>

            </section>
        );
    }
}

export default UIForms;
