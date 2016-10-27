import React, { Component } from 'react';

class UITabs extends Component{
    
    render() {
        return (
            <section className="ui__section">
                <h2 className="ui__title">Tabs</h2>
                
                <div className="tabs">
                    <ul className="tabs__list">
                        <li className="tabs__item">
                            <a href="#" className="tabs__link active">Tab active</a>
                        </li>
                        <li className="tabs__item">
                            <a href="#" className="tabs__link">Tab</a>
                        </li>
                        <li className="tabs__item">
                            <a href="#" className="tabs__link">Tab</a>
                        </li>
                        <li className="tabs__item">
                            <a href="#" className="tabs__link disabled">Tab disabled</a>
                        </li>
                    </ul>
                    <div className="tabs__content">
                        <div className="tabs__pane">
                            Tab pane 1
                        </div>
                    </div>
                </div>

                <div className="tabs tabs--vertical">
                    <ul className="tabs__list">
                        <li className="tabs__item">
                            <a href="#" className="tabs__link active">Tab active</a>
                        </li>
                        <li className="tabs__item">
                            <a href="#" className="tabs__link">Tab</a>
                        </li>
                        <li className="tabs__item">
                            <a href="#" className="tabs__link">Tab</a>
                        </li>
                        <li className="tabs__item">
                            <a href="#" className="tabs__link disabled">Tab disabled</a>
                        </li>
                    </ul>
                    <div className="tabs__content">
                        <div className="tabs__pane">
                            Tab pane 1
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default UITabs;