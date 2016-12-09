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
                        <div className="item">
                            Disabled
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
                        <div className="item">
                            <button className="button-default" disabled>
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
                        <div className="item">
                            <button className="button-primary" disabled>
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
                        <div className="item">
                            <button className="button-success" disabled>
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
                        <div className="item">
                            <button className="button-danger" disabled>
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
                        <div className="item">
                            <button className="button-cancel" disabled>
                                Cancel
                            </button>
                        </div>
                    </div>



                </article>

                <article className="ui__article ui-forms">

                    <h4 className="ui__sub-title">Alert</h4>

                    <div className="warning">
                        <div className="title">Holy guacamole! This is a warning!</div>
                        Best check yo self, you’re not looking too good. Nulla vitae elit libero, a pharetra augue.
                    </div>

                    <div className="danger">
                        <div className="title">Oh snap! You got an error!</div>
                        Change this and that and try again. Duis mollis, est non commodo luctus,
                        nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
                    </div>

                    <div className="info">
                        <div className="title">Heads up!</div>
                        This is an alert that needs your attention, but it’s not a huge priority just yet.
                    </div>

                    <div className="success">
                        <div className="title">Well done!</div>
                        You successfully read this alert message. Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Maecenas faucibus mollis interdum.
                    </div>



                </article>

                <article className="ui__article ui-forms">

                    <h4 className="ui__sub-title">Form grid</h4>

                    <div className="container">
                        <div className="form-grid grid-2 show-grid">

                            <div className="item-form">
                                <label className="elem-label">Input [type="text"]</label>
                                <div className="indent">
                                    <input className="span-4" type="text"/>
                                </div>
                            </div>

                            <div className="item-form">
                                <label className="elem-label">Select</label>
                                <div className="indent">
                                    <select className="span-4">
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
                                    <textarea className="span-6"></textarea>
                                </div>
                            </div>

                        </div>


                        <h4 className="ui__sub-title">Form grid example</h4>

                        <div className="">
                            <div className="form-grid grid-2 show-grid">
                                <div className="item-form">
                                    <label className="elem-label">Input "span-2"</label>
                                    <div className="indent">
                                        <input className="span-2" type="text"/>
                                    </div>
                                </div>
                                <div className="item-form">
                                    <label className="elem-label">Input "span-3"</label>
                                    <div className="indent">
                                        <input className="span-3" type="text"/>
                                    </div>
                                </div>
                                <div className="item-form">
                                    <label className="elem-label">Input "span-4"</label>
                                    <div className="indent">
                                        <input className="span-4" type="text"/>
                                    </div>
                                </div>
                                <div className="item-form">
                                    <label className="elem-label">Input "span-5"</label>
                                    <div className="indent">
                                        <input className="span-5 show-error" type="text"/>
                                        <span className="text-error">Input with error</span>
                                    </div>
                                </div>
                            </div>



                            <hr className="ui__delimeter" />



                            <div className="form-grid grid-2 show-grid">

                                <div className="item-form">
                                    <label className="label-row">Input "span-2"</label>
                                    <input className="span-2" type="text"/>
                                </div>
                                <div className="item-form">
                                    <label className="label-row">Input "span-3"</label>
                                    <input className="span-3" type="text"/>
                                </div>
                                <div className="item-form">
                                    <label className="label-row">Input "span-4"</label>
                                    <input className="span-4" type="text"/>
                                </div>
                                <div className="item-form">
                                    <label className="label-row">Input "span-5"</label>
                                    <div className="group-form span-5">
                                        <div className="elem">
                                            <input className="field" type="text" placeholder="Text" />
                                        </div>
                                        <span className="add-on">@</span>
                                    </div>
                                    <span className="sub-info">subinfo</span>
                                </div>

                            </div>


                        </div>





                        <h4 className="ui__sub-title">Form grid - groups</h4>

                        <div className="">
                            <div className="form-grid grid-2 show-grid">

                                <div className="item-form">
                                    <label className="elem-label">Group Form</label>
                                    <div className="indent span-2">
                                        <div className="flex-group-form">
                                            <div className="middle">
                                                <input className="field" type="text"/>
                                            </div>
                                            <div className="middle">
                                                <input className="field" type="text"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="indent span-3">
                                        <div className="flex-group-form">
                                            <div className="middle">
                                                <input className="field" type="text"/>
                                            </div>
                                            <div className="middle">
                                                <input className="field" type="text"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="indent span-4">
                                        <div className="flex-group-form">
                                            <div className="middle">
                                                <input className="field" type="text"/>
                                            </div>
                                            <div className="middle">
                                                <input className="field" type="text"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="indent span-5">
                                        <div className="flex-group-form">
                                            <div className="middle">
                                                <input className="field" type="text"/>
                                            </div>
                                            <div className="middle">
                                                <input className="field" type="text"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item-form">

                                    <label className="elem-label">Group Form</label>

                                    <div className="indent span-2">
                                        <div className="flex-group-form">
                                            <div className="middle">
                                                <select className="field">
                                                    <option>Select 1</option>
                                                </select>
                                            </div>
                                            <div className="middle">
                                                <select className="field">
                                                    <option>Select 1</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="indent span-3">
                                        <div className="flex-group-form">
                                            <div className="middle">
                                                <select className="field">
                                                    <option>Select 1</option>
                                                </select>
                                            </div>
                                            <div className="middle">
                                                <select className="field">
                                                    <option>Select 1</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="indent span-4">
                                        <div className="flex-group-form">
                                            <div className="middle">
                                                <select className="field">
                                                    <option>Select 1</option>
                                                </select>
                                            </div>
                                            <div className="middle">
                                                <select className="field">
                                                    <option>Select 1</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="indent span-5">
                                        <div className="flex-group-form">
                                            <div className="middle">
                                                <select className="field">
                                                    <option>Select 1</option>
                                                </select>
                                            </div>
                                            <div className="middle">
                                                <select className="field">
                                                    <option>Select 1</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item-form">
                                        <label className="elem-label">Group Form</label>

                                        <div className="indent span-6">
                                            <div className="flex-group-form">
                                                <div className="small">
                                                    <input className="field" type="text"/>
                                                    <span className="sub-info">small</span>
                                                </div>
                                                <div className="small">
                                                    <input className="field" type="text"/>
                                                    <span className="sub-info">small</span>
                                                </div>
                                                <div className="small">
                                                    <input className="field" type="text"/>
                                                    <span className="sub-info">small</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="indent span-6">
                                            <div className="flex-group-form">
                                                <div className="middle">
                                                    <input className="field" type="text"/>
                                                    <span className="sub-info">middle</span>
                                                </div>
                                                <div className="mini">
                                                    <select className="field">
                                                        <option>Select 1</option>
                                                    </select>
                                                    <span className="sub-info">mini</span>
                                                </div>
                                                <div className="middle">
                                                    <input className="field" type="text"/>
                                                    <span className="sub-info">middle</span>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="indent span-6">
                                            <div className="flex-group-form">
                                                <div className="small">
                                                    <input className="field" type="text"/>
                                                    <span className="sub-info">small</span>
                                                </div>
                                                <div className="mini">
                                                    <select className="field">
                                                        <option>Select 1</option>
                                                    </select>
                                                    <span className="sub-info">mini</span>
                                                </div>
                                                <div className="small">
                                                    <input className="field" type="text"/>
                                                    <span className="sub-info">small</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="indent span-6">
                                            <div className="flex-group-form">
                                                <div className="small">
                                                    <input className="field" type="text"/>
                                                    <span className="sub-info">small</span>
                                                </div>
                                                <div className="small">
                                                    <input className="field" type="text"/>
                                                    <span className="sub-info">small</span>
                                                </div>
                                                <div className="small">
                                                    <input className="field" type="text"/>
                                                    <span className="sub-info">small</span>
                                                </div>
                                                <div className="small">
                                                    <input className="field" type="text"/>
                                                    <span className="sub-info">small</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="indent span-6">
                                            <div className="flex-group-form">
                                                <div className="small">
                                                    <input className="field" type="text"/>
                                                    <span className="sub-info">mini</span>
                                                </div>
                                                <div className="small">
                                                    <input className="field" type="text"/>
                                                    <span className="sub-info">mini</span>
                                                </div>
                                                <div className="small">
                                                    <input className="field" type="text"/>
                                                    <span className="sub-info">mini</span>
                                                </div>
                                                <div className="small">
                                                    <input className="field" type="text"/>
                                                    <span className="sub-info">mini</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="indent span-6">
                                            <div className="flex-group-form">
                                                <div className="middle">
                                                    <input className="field" type="text"/>
                                                    <span className="sub-info">middle</span>
                                                </div>
                                                <div className="small">
                                                    <select className="field">
                                                        <option>Select 1</option>
                                                    </select>
                                                    <span className="sub-info">small</span>
                                                </div>

                                                <div className="middle">
                                                    <input className="field" type="text"/>
                                                    <span className="sub-info">middle</span>
                                                </div>
                                                <div className="small">
                                                    <select className="field">
                                                        <option>Select 1</option>
                                                    </select>
                                                    <span className="sub-info">small</span>
                                                </div>
                                            </div>
                                        </div>


                                    </div>


                                </div>




                            </div>
                        </div>




                        <h4 className="ui__sub-title">Form grid - flex</h4>

                        <div className="">
                            <div className="form-grid grid-2 show-grid">


                                <div className="item-form">
                                    <label className="elem-label">Select "field"</label>
                                    <div className="indent">
                                        <input className="field" type="text"/>
                                    </div>
                                </div>

                                <div className="item-form">
                                    <label className="elem-label">Textarea "field"</label>
                                    <div className="indent">
                                        <select className="field">
                                            <option>Select 1</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="item-form">
                                    <label className="elem-label">Group Form</label>

                                    <div className="indent">
                                        <div className="flex-group-form">
                                            <div className="small">
                                                <input className="field" type="text"/>
                                                <span className="sub-info">small</span>
                                            </div>
                                            <div className="small">
                                                <input className="field" type="text"/>
                                                <span className="sub-info">small</span>
                                            </div>
                                            <div className="small">
                                                <input className="field" type="text"/>
                                                <span className="sub-info">small</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="indent">
                                        <div className="flex-group-form">
                                            <div className="middle">
                                                <input className="field" type="text"/>
                                                <span className="sub-info">middle</span>
                                            </div>
                                            <div className="mini">
                                                <select className="field">
                                                    <option>Select 1</option>
                                                </select>
                                                <span className="sub-info">mini</span>
                                            </div>
                                            <div className="middle">
                                                <input className="field" type="text"/>
                                                <span className="sub-info">middle</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="indent">
                                        <div className="flex-group-form">
                                            <div className="small">
                                                <input className="field" type="text"/>
                                                <span className="sub-info">small</span>
                                            </div>
                                            <div className="mini">
                                                <select className="field">
                                                    <option>Select 1</option>
                                                </select>
                                                <span className="sub-info">mini</span>
                                            </div>
                                            <div className="small">
                                                <input className="field" type="text"/>
                                                <span className="sub-info">small</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="indent">
                                        <div className="flex-group-form">
                                            <div className="small">
                                                <input className="field" type="text"/>
                                                <span className="sub-info">small</span>
                                            </div>
                                            <div className="small">
                                                <input className="field" type="text"/>
                                                <span className="sub-info">small</span>
                                            </div>
                                            <div className="small">
                                                <input className="field" type="text"/>
                                                <span className="sub-info">small</span>
                                            </div>
                                            <div className="small">
                                                <input className="field" type="text"/>
                                                <span className="sub-info">small</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="indent">
                                        <div className="flex-group-form">
                                            <div className="small">
                                                <input className="field" type="text"/>
                                                <span className="sub-info">mini</span>
                                            </div>
                                            <div className="small">
                                                <input className="field" type="text"/>
                                                <span className="sub-info">mini</span>
                                            </div>
                                            <div className="small">
                                                <input className="field" type="text"/>
                                                <span className="sub-info">mini</span>
                                            </div>
                                            <div className="small">
                                                <input className="field" type="text"/>
                                                <span className="sub-info">mini</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="indent">
                                        <div className="flex-group-form">
                                            <div className="middle">
                                                <input className="field" type="text"/>
                                                <span className="sub-info">middle</span>
                                            </div>
                                            <div className="small">
                                                <select className="field">
                                                    <option>Select 1</option>
                                                </select>
                                                <span className="sub-info">small</span>
                                            </div>

                                            <div className="middle">
                                                <input className="field" type="text"/>
                                                <span className="sub-info">middle</span>
                                            </div>
                                            <div className="small">
                                                <select className="field">
                                                    <option>Select 1</option>
                                                </select>
                                                <span className="sub-info">small</span>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div className="item-form">
                                    <label className="elem-label">Input "field"</label>
                                    <div className="indent">
                                        <div className="flex-group-form">
                                            <div className="middle">
                                                <textarea className="field"></textarea>
                                            </div>
                                            <div className="middle">
                                                <textarea className="field"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <hr className="ui__delimeter" />


                            <div className="form-grid grid-2 show-grid">
                                <div className="form-group">
                                    <div className="middle">
                                        <div className="item-form">
                                            <label className="elem-label">Input 1</label>
                                            <div className="indent">
                                                <input className="field" type="text"/>
                                            </div>
                                        </div>
                                        <div className="item-form">
                                            <label className="elem-label">Input 2</label>
                                            <div className="indent">
                                                <div className="group-form field">
                                                    <span className="add-on">@</span>
                                                    <div className="elem">
                                                        <input className="field" type="text" placeholder="text" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-form">
                                            <label className="elem-label">Select 3</label>
                                            <div className="indent">
                                                <div className="group-form field">
                                                    <span className="add-on">@</span>
                                                    <div className="elem">
                                                        <select className="field">
                                                            <option>Select</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="middle">
                                        <div className="item-form">
                                            <label className="elem-label">Input 1</label>
                                            <div className="indent">
                                                <div className="flex-group-form">
                                                    <div className="middle">
                                                        <input className="field" type="text"/>
                                                    </div>
                                                    <div className="middle">
                                                        <input className="field" type="text"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-form">
                                            <label className="elem-label">Input 2</label>
                                            <div className="indent">
                                                <div className="group-form field">
                                                    <div className="elem">
                                                        <input className="field" type="text" placeholder="text" />
                                                    </div>
                                                    <span className="add-on">@</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-form">
                                            <label className="elem-label">Select 3</label>
                                            <div className="indent">
                                                <div className="group-form field">
                                                    <div className="elem">
                                                        <select className="field">
                                                            <option>Select</option>
                                                        </select>
                                                    </div>
                                                    <span className="add-on">@</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>



                            <hr className="ui__delimeter" />


                            <div className="form-grid show-grid">
                                <div className="form-group">
                                    <div className="middle grid-3">
                                        <div className="item-form">
                                            <label className="elem-label">Input 1</label>
                                            <div className="indent">
                                                <input className="field" type="text"/>
                                            </div>
                                        </div>
                                        <div className="item-form">
                                            <label className="elem-label">Input 2</label>
                                            <div className="indent">
                                                <div className="group-form field">
                                                    <span className="add-on">@</span>
                                                    <div className="elem">
                                                        <input className="field" type="text" placeholder="text" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-form">
                                            <label className="elem-label">Select 3</label>
                                            <div className="indent">
                                                <div className="group-form field">
                                                    <span className="add-on">@</span>
                                                    <div className="elem">
                                                        <select className="field">
                                                            <option>Select</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="middle">
                                        <div className="item-form">
                                            <label className="elem-label">Input 1</label>
                                            <div className="indent">
                                                <div className="flex-group-form">
                                                    <div className="middle">
                                                        <input className="field" type="text"/>
                                                    </div>
                                                    <div className="middle">
                                                        <input className="field" type="text"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-form">
                                            <label className="elem-label">Input 2</label>
                                            <div className="indent">
                                                <div className="group-form field">
                                                    <div className="elem">
                                                        <input className="field" type="text" placeholder="text" />
                                                    </div>
                                                    <span className="add-on">@</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-form">
                                            <label className="elem-label">Select 3</label>
                                            <div className="indent">
                                                <div className="group-form field">
                                                    <div className="elem">
                                                        <select className="field">
                                                            <option>Select</option>
                                                        </select>
                                                    </div>
                                                    <span className="add-on">@</span>
                                                </div>
                                            </div>
                                        </div>
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
