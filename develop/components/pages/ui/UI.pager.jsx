import React, { Component } from 'react';

class UIPager extends Component{
    render() {

        return(
            <div className="ui__section">
                <div className="ui__title">Pager</div>

                <div className="pager-container">
                    <ul className="pager">
                        <li className="pager__item">
                            <a href="#" className="pager__link">Previous</a>
                        </li>
                        <li className="pager__item">
                            <a href="#" className="pager__link">Next</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default UIPager;