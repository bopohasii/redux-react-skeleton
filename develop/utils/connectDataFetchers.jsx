'use strict';

import React from 'react';

export default function connectDataFetchers(Component, actionCreators) {
    return class DataFetchersWrapper extends React.Component {
        static fetchData(dispatch, params = {}, query = {}) {
            return Promise.all(
                actionCreators.map( actionCreator => dispatch( actionCreator(params, query) ) )
            );
        }

        componentDidMount() {
            DataFetchersWrapper.fetchData(
                this.props.dispatch,
                this.props.params,
                this.props.location.query
            );
        }

        render() {
            return (
                <Component {...this.props} />
            );
        }
    };
}
