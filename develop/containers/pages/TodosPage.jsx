'use strict';

import React from 'react';

import { connect } from 'react-redux';

import { loadMovies } from '../../actions/todos.action';
import connectDataFetchers from '../../utils/connectDataFetchers.jsx';
import history from '../../config/appHistory';

import TodosPage from '../../components/pages/Todos/TodosPage.jsx';

import { addTodo } from '../../actions/todos.action';

class TodosPageContainer extends React.Component {

    handleAddTodo = (todo) => {
        this.props.dispatch(addTodo(todo));
    };

    handleTodoComplete = (todoId) => {
        this.props.dispatch(completeTodo(todoId));
    };

    render() {
        return (
            <TodosPage
                todos              = {this.props.todos}
                handleAddTodo      = {this.handleAddTodo}
                handleTodoComplete = {this.handleTodoComplete}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos || []
    };
}

export default connect(mapStateToProps)(
    connectDataFetchers(TodosPageContainer, [  ])
);

