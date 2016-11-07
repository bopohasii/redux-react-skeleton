import React, { Component } from 'react';

class UITable extends Component{
    
    render() {
        return (
            <section className="ui__section">
                <h2 className="ui__title">Table</h2>

                <div className="table">
                    <div className="table__header">
                        <div className="table__cell">Table col 1</div>
                        <div className="table__cell">Table col 2</div>
                        <div className="table__cell">Table col 3</div>
                        <div className="table__cell">Table col 4</div>
                    </div>
                    <div className="table__row">
                        <div className="table__cell">Table col 1</div>
                        <div className="table__cell">Table col 2</div>
                        <div className="table__cell">Table col 3</div>
                        <div className="table__cell">Table col 4</div>
                    </div>
                    <div className="table__row">
                        <div className="table__cell">Table col 1</div>
                        <div className="table__cell">Table col 2</div>
                        <div className="table__cell">Table col 3</div>
                        <div className="table__cell">Table col 4</div>
                    </div>
                </div>

            </section>
        );
    }
}

export default UITable;