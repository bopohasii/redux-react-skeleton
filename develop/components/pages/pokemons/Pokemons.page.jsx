import React, { Component, PropTypes } from 'react';
import Pokemon from '../../pokemons/Pokemon.jsx';

class PokemonsPage extends Component {
    static propTypes = {
        pokemons: PropTypes.object,
        handleGetPokemons: PropTypes.func,
    };

    renderPokemonsList(pokemons = []) {
        return pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />);
    };

    render() {
        const { pokemons } = this.props;

        return pokemons.isLoading
            ? <span className="text-center">Loading...</span>
            : (
                <div className="row">
                    { this.renderPokemonsList(pokemons.entities) }
                </div>
            );
    }
}

export default PokemonsPage;
