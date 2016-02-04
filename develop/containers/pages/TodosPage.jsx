'use strict';

import React       from 'react';
import { connect } from 'react-redux';

import connectDataFetchers from '../../utils/connectDataFetchers.jsx';

import TodosPage           from '../../components/pages/Todos/TodosPage.jsx';
import { addTodo, clearAll, completeTodo } from '../../actions/todos.action';

class TodosPageContainer extends React.Component {
    static propTypes = {
        todos: React.PropTypes.array
    };

    handleAddTodo = (todo) => {
        this.props.dispatch(addTodo({todo}));
    };

    handleClearAll = () => {
        this.props.dispatch(clearAll());
    };

    handleTodoComplete = (todoId) => {
        this.props.dispatch(completeTodo({todoId}));
    };

    render() {
        return (
            <TodosPage
                todos              = {this.props.todos}
                handleAddTodo      = {this.handleAddTodo}
                handleClearAll     = {this.handleClearAll}
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

