'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPokemons } from '../../actions/pokeball.actions';

import PokemonsPage from '../../components/pages/pokemons/Pokemons.page.jsx';


class PokemonsContainer extends Component {
    static propTypes = {
        pokemons: PropTypes.object,
        handleGetPokemons: PropTypes.func,
    };

    componentDidMount() {
        this.props.handleGetPokemons();
    }

    handleGetPokemonsNext() {
        this.props.handleGetPokemons();
    }

    render() {
        const { pokemons } = this.props;

        return (
            <PokemonsPage
                pokemons = {pokemons}
                handleGetPokemons = {this.handleGetPokemonsNext}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    pokemons: state.pokeball.pokemons
});

const mapDispatchToProps = (dispatch) => ({
    handleGetPokemons: bindActionCreators(getPokemons, dispatch),
        // handleClearAll: bindActionCreators(clearAll, dispatch),
        // handleTodoComplete: bindActionCreators(completeTodo, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsContainer);
