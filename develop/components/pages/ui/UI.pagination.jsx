import React, { Component } from 'react';

class UIPagination extends Component{
    render() {
        return(
            <div className="ui__section">
                <div className="ui__title">Pagination</div>

                <div className="pagination-container">
                    <ul className="pagination">
                        <li className="pagination__item">
                            <a href="#" className="pagination__link disabled">«</a>
                        </li>
                        <li className="pagination__item">
                            <a href="#" className="pagination__link active">1</a>
                        </li>
                        <li className="pagination__item">
                            <a href="#" className="pagination__link">2</a>
                        </li>
                        <li className="pagination__item">
                            <a href="#" className="pagination__link disabled">...</a>
                        </li>
                        <li className="pagination__item">
                            <a href="#" className="pagination__link">4</a>
                        </li>
                        <li className="pagination__item">
                            <a href="#" className="pagination__link">5</a>
                        </li>
                        <li className="pagination__item">
                            <a href="#" className="pagination__link">»</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default UIPagination;