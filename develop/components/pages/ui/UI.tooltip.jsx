import React, { Component } from 'react';
import UITooltip from '../../common/UITooltip.jsx';

class UITooltipBlock extends Component{

    render() {

        return (
            <section className="ui__section">
                <h2 className="ui__title">Tooltip</h2>

                <div className="ui__tooltip">
                    <div className="ui__tooltip-item">
                        <UITooltip
                            placement="top"
                            text="Tooltip text"
                        >
                            <div>Tooltip top</div>
                        </UITooltip>
                    </div>

                    <div className="ui__tooltip-item">
                        <UITooltip
                            placement="left"
                            text="Tooltip text"
                        >
                            <div>Tooltip left</div>
                        </UITooltip>
                    </div>

                    <div className="ui__tooltip-item">
                        <UITooltip
                            placement="right"
                            text="Tooltip text"
                        >
                            <div>Tooltip right</div>
                        </UITooltip>
                    </div>

                    <div className="ui__tooltip-item">
                        <UITooltip
                            placement="bottom"
                            text="Tooltip text"
                        >
                            <div>Tooltip bottom</div>
                        </UITooltip>
                    </div>
                </div>
            </section>
        );
    }
}

export default UITooltipBlock;
