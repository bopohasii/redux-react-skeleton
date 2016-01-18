'use strict';

import React from 'react';

import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';

import './../TodosPage.less';


export default class TodoList extends React.Component {
    static propTypes = {
        todo: React.PropTypes.object
    };

    static defaultProps = {
        todo: {}
    };


    render() {
        const { todo } = this.props;

        return (
            <TableRow>
                <TableRowColumn>{todo.value}</TableRowColumn>
                <TableRowColumn>{todo.date}</TableRowColumn>
            </TableRow>
        );
    }
}

