import React, { Component, PropTypes } from 'react';
import Select from 'react-select';

import 'react-select/dist/react-select.css';

class UISelect extends Component {
    renderOptions() {
        const { options, valueKey, nameKey } = this.props;

        return options.map((o) => ({
            value: o[valueKey],
            name: o[nameKey],
        }));
    }

    render() {
        const {
            value,
            onBlur,
            delimiter,
            disabled,
            className,
            ...props,
        } = this.props;

        return (
            <Select
              {...props}
              className={className}
              delimiter={delimiter}
              disabled={disabled}
              value={value}
              onBlur={onBlur}
              options={this.renderOptions()}
            />
        );
    }
}

UISelect.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    options: PropTypes.array,
    valueKey: PropTypes.string,
    nameKey: PropTypes.string,
    optionsCollection: PropTypes.array,
    multi: PropTypes.bool,
    joinValues: PropTypes.bool,
    disabled: PropTypes.bool,
    delimiter: PropTypes.string,
    className: PropTypes.string,
};

UISelect.defaultProps = {
    options: [],
    valueKey: 'value',
    nameKey: 'name',
    value: '',
    delimiter: ',',
    disabled: false,
    className: 'OKsi_custom',
    multi: false,
    joinValues: false,
};

export default UISelect;
