import React, { Component } from 'react';
import UIPopover from '../../common/UIPopover.jsx';

class UIPopoverBlock extends Component{

    render() {

        return (
            <section className="ui__section">
                <h2 className="ui__title">Popover</h2>

                <div className="ui__popover">
                    <div className="ui__popover-item">
                        <UIPopover
                            visible={true}
                            placement="top"
                            overlay={<div className="text">Popover content</div>}
                            handleToggle={() => {}}
                        >
                            <h2 className="title">Popover top</h2>
                        </UIPopover>
                    </div>
                </div>

                <div className="ui__popover">
                    <div className="ui__popover-item">
                        <UIPopover
                            visible={true}
                            placement="left"
                            overlay={<div className="text">Popover content</div>}
                            handleToggle={() => {}}
                        >
                            <h2 className="title">Popover left</h2>
                        </UIPopover>
                    </div>
                </div>

                <div className="ui__popover">
                    <div className="ui__popover-item">
                        <UIPopover
                            visible={true}
                            placement="right"
                            overlay={<div className="text">Popover content</div>}
                            handleToggle={() => {}}
                        >
                            <h2 className="title">Popover right</h2>
                        </UIPopover>
                    </div>
                </div>

                <div className="ui__popover">
                    <div className="ui__popover-item">
                        <UIPopover
                            visible={true}
                            placement="bottom"
                            overlay={<div className="text">Popover content</div>}
                            handleToggle={() => {}}
                        >
                            <h2 className="title">Popover bottom</h2>
                        </UIPopover>
                    </div>
                </div>

            </section>
        );
    }
}

export default UIPopoverBlock;
