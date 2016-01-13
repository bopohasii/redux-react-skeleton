import React from 'react';

import Grid, { Cell } from 'react-mdl/lib/Grid';

import AppBar   from '../AppBar.jsx';

import './MoviesPage.less';


export default class MoviesPage extends React.Component {
    static propTypes = {
        movies:      React.PropTypes.arrayOf(React.PropTypes.object)
    };

    render() {
        const { movies, isLoading } = this.props;

        return (
            <div className='MoviesPage'>
                <AppBar
                    title         = {'Title'}
                    scrollOffset  = {0}
                />

                {
                    isLoading
                        ? (
                            <Grid className='MoviesPage__list'>Loading...</Grid>
                        ) : (
                            <Grid className='MoviesPage__list'>
                                {movies.map( movie =>
                                    <Cell
                                        key    = {movie.id}
                                        align  = 'stretch'
                                        col    = {3}
                                        tablet = {6}
                                        phone  = {12}>
                                    </Cell>
                                )}
                            </Grid>
                        )
                }
            </div>
        );
    }
}

