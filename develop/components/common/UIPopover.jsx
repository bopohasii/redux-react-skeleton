import React, { Component, PropTypes } from 'react';
import Tooltip from 'rc-tooltip';

class Popover extends Component {
    handleToggleVisibility = (visible) => {
        this.props.handleToggle(visible);
    };

    render() {
        const {
            visible,
            align,
            placement,
            trigger,
            overlay,
            children,
        } = this.props;

        return (
            <Tooltip
              visible={visible}
              align={align}
              trigger={trigger}
              placement={placement}
              overlay={overlay}
              overlayClassName={'tooltipOverlay'}
              onVisibleChange={this.handleToggleVisibility}
            >
                {children}
            </Tooltip>
        );
    }
}

Popover.propTypes = {
    visible: PropTypes.bool,
    align: PropTypes.object,
    overlay: PropTypes.element,
    placement: PropTypes.oneOf(['left', 'right', 'top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
    trigger: PropTypes.oneOf(['hover', 'click', 'focus']),
    handleToggle: PropTypes.func,
    isNotification: PropTypes.bool,
    children: PropTypes.node,
};

Popover.defaultProps = {
    placement: 'bottomRight',
    trigger: 'click',
    align: {},
};

export default Popover;
