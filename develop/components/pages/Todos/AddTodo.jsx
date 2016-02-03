'use strict';

import React    from 'react';
import ReactDOM from 'react-dom';

import TextField    from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

import './TodosPage.less';


class AddTodo extends React.Component {
    constructor() {
        super();
        this.state = { isDisabled: true };
    }

    static propTypes = {

    };

    handleChange() {
        const isTodoEmpty = (this.refs.todoNode.getValue().length === 0);
        this.setState({ isDisabled: isTodoEmpty });
    }

    handleAdTodo() {
        const addTodo = this.refs.todoNode;

        this.props.handleAddTodo(addTodo.getValue());

        addTodo.setValue('');
    }

    render() {
        return (
            <div className='AddTodo'>
                <TextField
                    hintText='Enter todo'
                    ref='todoNode'
                    onChange={this.handleChange.bind(this)}
                />
                <RaisedButton
                    label='Add'
                    onClick={this.handleAdTodo.bind(this)}

                />
            </div>
        );
    }
}

export default AddTodo;


