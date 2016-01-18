'use strict';

import React from 'react';

import { connect } from 'react-redux';

import { loadMovies } from '../../actions/todos';
import connectDataFetchers from '../../utils/connectDataFetchers.jsx';
import history from '../../config/appHistory';

import TodosPage from '../../components/pages/Todos/TodosPage.jsx';

import { addTodo } from '../../actions/todos';

class TodosPageContainer extends React.Component {

    handleAddTodo = (todo) => {
        this.props.dispatch(addTodo(todo));
    };

    render() {
        return (
            <TodosPage
                todos         = {this.props.todos}
                handleAddTodo = {this.handleAddTodo}
            />
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        todos: state.todos.entities || []
    };
}

export default connect(mapStateToProps)(
    connectDataFetchers(TodosPageContainer, [  ])
);

