import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPokemon } from '../../actions/pokeball.actions';
import pTypes from '../../actions/types/pokeball.types';

import PokemonPage from '../../components/pages/pokemons/Pokemon.page.jsx';

class PokemonContainer extends Component {

    componentDidMount() {
        const { params, handleGetPokemon } = this.props;

        handleGetPokemon({ pokemonId: params.pokemonId });
    }

    render() {
        const { apiMeta, pokemon } = this.props;

        return (
            <PokemonPage
              apiMeta={apiMeta}
              pokemon={pokemon}
            />
        );
    }
}

PokemonContainer.propTypes = {
    params: PropTypes.object,
    pokemon: PropTypes.object,
    apiMeta: PropTypes.object,
    handleGetPokemon: PropTypes.func,
};

const mapStateToProps = (state) => ({
    // // todo: set initializing for apiMeta
    apiMeta: state.api[pTypes.GET_POKEMON] || {},
    pokemon: state.pokeball.pokemon,
});

const mapDispatchToProps = (dispatch) => ({
    handleGetPokemon: bindActionCreators(getPokemon, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);
