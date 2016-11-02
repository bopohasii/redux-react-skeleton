import React, { PropTypes } from 'react';

const UITooltip = (props) => {
    const { text, placement, children } = props;
    const classNames = 'tooltip-custom'
        + `${(placement === 'top') ? ' tooltip-top' : ''}`
        + `${(placement === 'left') ? ' tooltip-left' : ''}`
        + `${(placement === 'right') ? ' tooltip-right' : ''}`
        + `${(placement === 'bottom') ? ' tooltip-bottom' : ''}`;

    return (
        <span className={classNames}>
            {children}
            {
                text
                    ? <span className="tooltip-text">{text}</span>
                    : null
            }
        </span>
    );
};

UITooltip.propTypes = {
    text: PropTypes.string,
    placement: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
    children: PropTypes.element,
};

UITooltip.defaultProps = {
    placement: 'top',
};

export default UITooltip;
