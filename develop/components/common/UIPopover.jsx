import React, { Component, PropTypes } from 'react';
import Tooltip from 'rc-tooltip';

class UIPopover extends Component {
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

UIPopover.propTypes = {
    visible: PropTypes.bool,
    align: PropTypes.object,
    overlay: PropTypes.element,
    placement: PropTypes.oneOf(['left', 'right', 'top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
    trigger: PropTypes.oneOf(['hover', 'click', 'focus']),
    handleToggle: PropTypes.func,
    isNotification: PropTypes.bool,
    children: PropTypes.node,
};

UIPopover.defaultProps = {
    placement: 'bottomRight',
    trigger: 'click',
    align: {},
};

export default UIPopover;
