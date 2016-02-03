'use strict';

import React from 'react';

import TableRow       from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';

import classNames from 'classnames';

import './../TodosPage.less';

class Todo extends React.Component {
    static propTypes = {
        todo               : React.PropTypes.object,
        handleTodoComplete : React.PropTypes.func
    };

    render() {
        const { key,  todo, handleTodoComplete } = this.props;
        const tableRow = classNames({'completed': todo.completed});

        return (
            <tr className={tableRow} key={key}>
                <td>
                    <input
                        type="checkbox"
                        onChange={handleTodoComplete.bind(this, todo.id)}
                    />
                </td>
                <td>{todo.value}</td>
                <td>{todo.date}</td>
            </tr>
        );
    }
}

export default Todo;


