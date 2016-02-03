'use strict';

import React from 'react';


import AppBar   from 'material-ui/lib/app-bar';
import AddTodo  from './AddTodo.jsx';
import TodoList from './TodoList/TodoList.jsx';

import './TodosPage.less';


class TodosPage extends React.Component {
    static propTypes = {
        todos              : React.PropTypes.array,
        handleAddTodo      : React.PropTypes.func,
        handleTodoComplete : React.PropTypes.func
    };

    render() {
        const { todos, handleAddTodo, handleTodoComplete } = this.props;

        return (
            <div className='TodosPage'>
                <AppBar
                    style={{padding: 0}}
                    title="Todos"
                />
                <AddTodo
                    handleAddTodo = {handleAddTodo}
                />
                <TodoList
                    todos              = {todos}
                    handleTodoComplete = {handleTodoComplete}
                />
            </div>
        );
    }
}

export default TodosPage;


