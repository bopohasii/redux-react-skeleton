'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPokemons } from '../../actions/pokeball.actions';
import pTypes from '../../actions/types/pokeball.types';

import PokemonsPage from '../../components/pages/pokemons/Pokemons.page.jsx';


class PokemonsContainer extends Component {
    static propTypes = {
        pokemons: PropTypes.object,
        paginator: PropTypes.object,
        handleGetPokemons: PropTypes.func,
    };

    componentDidMount() {
        this.props.handleGetPokemons({ limit: 12 });
    }

    handleGetPokemonsNext() {
        const { paginator, handleGetPokemons } = this.props;

        handleGetPokemons({ ...paginator[pTypes.GET_POKEMONS_SUCCESS] });
    }

    render() {
        const { pokemons } = this.props;

        return (
            <PokemonsPage
                pokemons = {pokemons}
                handleGetPokemons = {this.handleGetPokemonsNext.bind(this)}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    pokemons: state.pokeball.pokemons,
    paginator: state.api.paginator,
});

const mapDispatchToProps = (dispatch) => ({
    handleGetPokemons: bindActionCreators(getPokemons, dispatch),
        // handleClearAll: bindActionCreators(clearAll, dispatch),
        // handleTodoComplete: bindActionCreators(completeTodo, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsContainer);
