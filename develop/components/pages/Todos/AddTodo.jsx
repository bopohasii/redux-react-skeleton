'use strict';

import React    from 'react';
import ReactDOM from 'react-dom';

import TextField    from 'material-ui/lib/text-field';
import FlatButton   from 'material-ui/lib/flat-button';

import './TodosPage.less';


class AddTodo extends React.Component {
    constructor() {
        super();
        this.state = { isDisabled: true };
    }

    static propTypes = {

    };

    handleChange(event) {
        if (event.keyCode === 13) {
            this.handleAdTodo();
        }

        const isTodoEmpty = !this.refs.todoNode.getValue().length;
        this.setState({ isDisabled: isTodoEmpty });
    }

    handleAdTodo() {
        const addTodo = this.refs.todoNode;

        if (!addTodo.getValue().length) return false;

        this.props.handleAddTodo(addTodo.getValue());

        addTodo.setValue('');
    }

    render() {
        const textFieldStyle = {
            margin: '0 20px'
        };

        return (
            <div className='AddTodo'>
                <TextField
                    ref       = 'todoNode'
                    hintText  = 'Enter todo'
                    style     = {textFieldStyle}
                    onChange  = {this.handleChange.bind(this)}
                    onKeyDown = {this.handleChange.bind(this)}
                />
                <FlatButton
                    label    = 'Add'
                    secondary= {true}
                    onClick  = {this.handleAdTodo.bind(this)}
                    disabled = {this.state.isDisabled}
                />
            </div>
        );
    }
}

export default AddTodo;


