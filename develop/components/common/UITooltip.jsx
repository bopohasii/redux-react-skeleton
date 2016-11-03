import React, { PropTypes } from 'react';

const UITooltip = (props) => {
    const { text, placement, children } = props;
    const classNames = 'tooltip'
        + `${(placement === 'top') ? ' tooltip__top' : ''}`
        + `${(placement === 'left') ? ' tooltip__left' : ''}`
        + `${(placement === 'right') ? ' tooltip__right' : ''}`
        + `${(placement === 'bottom') ? ' tooltip__bottom' : ''}`;

    return (
        <div className={classNames}>
            {children}
            {
                text
                    ? <p className="tooltip__text">{text}</p>
                    : null
            }
        </div>
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
