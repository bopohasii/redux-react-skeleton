'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

import './TodosPage.less';


export default class AddTodo extends React.Component {
    constructor() {
        super();
        this.state = { isDisabled: true };
    }

    static propTypes = {

    };

    handleChange() {
        const isTodoEmpty = (this.refs.todo.getValue().length === 0);
        this.setState({ isDisabled: isTodoEmpty });
    }

    handleAdTodo() {
        const addTodo = this.refs.todo;

        this.props.handleAddTodo({
            id: Date.now(),
            value: addTodo.getValue(),
            date: +new Date()
        });

        addTodo.setValue('');
    }

    render() {
        const { handleAddTodo } = this.props;

        return (
            <div className='AddTodo'>
                <TextField
                    hintText='todo'
                    ref='todo'
                    onChange={this.handleChange.bind(this)}
                />
                <RaisedButton
                    label='Add'
                    onClick={this.handleAdTodo.bind(this)}
                    disabled={this.state.isDisabled}
                />
            </div>
        );
    }
}

