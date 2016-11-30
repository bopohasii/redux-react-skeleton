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

                    <div className="form-grid grid-2">

                        <div className="item-form">
                            <label className="elem-label">Input [type="text"]</label>
                            <div className="indent">
                                <input type="text"/>
                            </div>
                        </div>

                        <div className="item-form">
                            <label className="elem-label">Input [type="text"]</label>
                            <div className="indent">
                                <input type="text" className="show-error" />
                            </div>
                        </div>

                        <div className="item-form">
                            <label className="elem-label">Input [type="file"]</label>
                            <div className="indent">
                                <input type="file" />
                            </div>
                        </div>

                        <div className="item-form">
                            <label className="elem-label">Select</label>
                            <div className="indent">
                                <select>
                                    <option>Select 1</option>
                                </select>
                            </div>
                        </div>

                        <div className="item-form">
                            <div className="indent">
                                <label>
                                    <input className="check-box" type="checkbox" />
                                    <span className="marker">checkbox One</span>
                                </label>
                            </div>
                            <div className="indent">
                                <label>
                                    <input className="check-box" type="checkbox" checked />
                                    <span className="marker">checkbox Two</span>
                                </label>
                            </div>
                        </div>
                        <div className="item-form">
                            <div className="indent">
                                <label>
                                    <input name="radio" className="radio-box" type="radio" />
                                    <span className="marker">radio box One</span>
                                </label>
                            </div>
                            <div className="indent">
                                <label>
                                    <input name="radio" className="radio-box" type="radio" />
                                    <span className="marker">radio box One</span>
                                </label>
                            </div>
                        </div>

                        <div className="item-form">
                            <label className="elem-label">Textarea</label>
                            <div className="indent">
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

                <article className="ui__article ui-forms">

                    <h4 className="ui__sub-title">Alert</h4>

                    <div className="alert-warning">
                        Warning
                    </div>

                    <div className="alert-danger">
                        Danger
                    </div>

                    <div className="alert-info">
                        Info
                    </div>

                    <div className="alert-success">
                        Success
                    </div>



                </article>

                <article className="ui__article ui-forms">

                    <h4 className="ui__sub-title">Form grid</h4>

                    <div className="container">
                        <div className="form-grid grid-2 show-grid">

                            <div className="item-form">
                                <label className="elem-label">Input [type="text"]</label>
                                <div className="indent">
                                    <input className="span4" type="text"/>
                                </div>
                            </div>

                            <div className="item-form">
                                <label className="elem-label">Select</label>
                                <div className="indent">
                                    <select className="span4">
                                        <option>Select 1</option>
                                    </select>
                                </div>
                            </div>

                            <div className="item-form">
                                <label className="elem-label">Input [type="file"]</label>
                                <div className="indent">
                                    <input type="file" />
                                </div>
                            </div>


                            <div className="item-form">
                                <label className="elem-label">Textarea</label>
                                <div className="indent">
                                    <textarea className="span6"></textarea>
                                </div>
                            </div>

                        </div>


                        <h4 className="ui__sub-title">Form grid -> grid-2</h4>

                        <div className="">
                            <div className="form-grid grid-2 show-grid">

                                <div className="item-form">
                                    <label className="elem-label">Input - "span2"</label>
                                    <div className="indent">
                                        <input className="span2" type="text"/>
                                    </div>
                                </div>

                                <div className="item-form">
                                    <label className="elem-label">Input "span3"</label>
                                    <div className="indent">
                                        <input className="span3" type="text"/>
                                    </div>
                                </div>

                                <div className="item-form">
                                    <label className="elem-label">Input "span4"</label>
                                    <div className="indent">
                                        <input className="span4" type="text"/>
                                    </div>
                                </div>

                                <div className="item-form">
                                    <label className="elem-label">Input "span5"</label>
                                    <div className="indent">
                                        <input className="span5" type="text"/>
                                    </div>
                                </div>

                                <hr className="ui__delimeter" />

                                <div className="item-form">
                                    <label className="elem-label">Select "filed"</label>
                                    <div className="indent">
                                        <input className="filed" type="text"/>
                                    </div>
                                </div>

                                <div className="item-form">
                                    <label className="elem-label">Textarea "filed"</label>
                                    <div className="indent">
                                        <select className="filed">
                                            <option>Select 1</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="item-form">
                                    <label className="elem-label">Input "filed"</label>
                                    <div className="indent">
                                        <textarea className="filed"></textarea>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                </article>

            </section>
        );
    }
}

export default UIForms;
