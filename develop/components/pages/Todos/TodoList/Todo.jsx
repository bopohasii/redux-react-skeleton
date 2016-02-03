'use strict';

import React from 'react';

import TableRow       from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';

import classNames from 'classnames'

import './../TodosPage.less';

class TodoList extends React.Component {
    static propTypes = {
        todo               : React.PropTypes.object,
        handleTodoComplete : React.PropTypes.func
    };

    static defaultProps = {
        todo: {}
    };

    render() {
        const { todo, handleTodoComplete } = this.props;

        const tableRow = classNames({'completed': todo.completed});

        return (
            <TableRow onClick={handleTodoComplete.bind(this, todo.id)} className={tableRow}>
                <TableRowColumn>{todo.value}</TableRowColumn>
                <TableRowColumn>{todo.date}</TableRowColumn>
            </TableRow>
        );
    }
}

export default TodoList;


