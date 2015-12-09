'use strict';

import React from 'react';

import { connect } from 'react-redux';

import { loadMovies } from '../../actions/movies';
import connectDataFetchers from '../../lib/connectDataFetchers.jsx';
import history from '../../history';

import MoviesPage from '../../components/pages/MoviesPage.jsx';

class MoviesPageContainer extends React.Component {

    componentWillReceiveProps(nextProps) {
        if (this.props.location.query.search !== nextProps.location.query.search) {
            this.props.dispatch(loadMovies(nextProps.params, nextProps.location.query) );
        }
    }

    render() {
        return (
            <MoviesPage
                movies      = {this.props.movies}
                isLoading   = {this.props.isLoading}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies.entities || [],
        isLoading: state.movies.isLoading
    };
}

export default connect(mapStateToProps)(
    connectDataFetchers(MoviesPageContainer, [ loadMovies ])
);

