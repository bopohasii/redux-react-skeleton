'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Table from 'material-ui/lib/table/table';
import TableBody from 'material-ui/lib/table/table-body';
import TableHeader from 'material-ui/lib/table/table-header';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';

import Todo from './Todo.jsx';

import './../TodosPage.less';


export default class TodoList extends React.Component {
    static propTypes = {
        todos: React.PropTypes.array
    };

    static defaultProps = {
        todos: []
    };

    handleCheckTodo(selectedRows) {
        console.log(selectedRows);
    }

    render() {
        const { todos } = this.props;

        const rows = todos.map((todo, index) => {
            return (
                <Todo
                    key  = {todo.id + index}
                    todo = {todo}
                />
            );
        });

        console.log(rows);

        return (
            <div className='TodoList'>
                <Table
                    onRowSelection={this.handleCheckTodo}
                >
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Todo</TableHeaderColumn>
                            <TableHeaderColumn>Date</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody selectable={true}>
                        {rows}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

