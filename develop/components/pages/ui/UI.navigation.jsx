import React, { Component } from 'react';

class UINavigation extends Component{

    render() {

        return (
            <div className="ui__section">
                <div className="ui__title">Navigation</div>

                <nav className="nav">
                    <div className="nav__item active">
                        <a href="#" className="nav__link">Menu-item 1</a>
                    </div>
                    <div className="nav__item">
                        <a href="#" className="nav__link">Menu-item 2</a>
                    </div>
                    <div className="nav__item">
                        <a href="#" className="nav__link">Menu-item 3</a>
                    </div>
                </nav>


                <ul className="nav">
                    <li className="nav__item active">
                        <a href="#" className="nav__link">Menu-item 1</a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">Menu-item 2</a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">Menu-item 3</a>
                    </li>

                    <li className="nav__item nav__item--dropdown">
                        <a href="#" className="nav__link">Menu-item dropdown</a>
                        <ul className="nav__sub">
                            <li className="nav__item">
                                <a href="#" className="nav__link">Menu-sub item 1</a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">Menu-sub item 2</a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">Menu-sub item 3</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default UINavigation;
