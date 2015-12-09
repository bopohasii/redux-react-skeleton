'use strict';

import React from 'react';

import IconButton from 'react-mdl/lib/IconButton';

import cx from 'classnames';

import './AppBar.less';


export default class AppBar extends React.Component {
    static propTypes = {
        title            : React.PropTypes.string,
        rightIconName    : React.PropTypes.string,
        scrollOffset     : React.PropTypes.number,
        onRightIconClick : React.PropTypes.func
    };

    static defaultProps = {
        title         : '',
        rightIconName : 'menu',
        scrollOffset  : 0
    };

    state = {
        isFixedToTop : false
    };

    handleScroll = () => {
        //const scrollTop = $(window).scrollTop();
        const isFixedToTop = scrollTop > this.props.scrollOffset;

        if (isFixedToTop !== this.state.isFixedToTop) {
            this.setState({ isFixedToTop });
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const { title, rightIconName, onRightIconClick, onCartClick, onSearch } = this.props;

        const rootClassNames = cx('AppBar', this.props.className, {
            'AppBar--fixed'       : this.state.isFixedToTop
        });

        return (
            <div className={rootClassNames}>
                <div className='AppBar__left'>
                    <IconButton name={rightIconName} onClick={onRightIconClick} />
                    <h2 className='AppBar__title'> {title} </h2>
                </div>
                <div className='AppBar__right'>
                    <IconButton name='shopping_cart' onClick={onCartClick} />
                </div>
            </div>
        );
    }
}

