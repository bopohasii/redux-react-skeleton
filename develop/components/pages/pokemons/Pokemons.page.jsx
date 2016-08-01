import React, { Component, PropTypes } from 'react';
import Pokemon from '../../pokemons/Pokemon.jsx';

class PokemonsPage extends Component {
    renderPokemonsList(pokemons = []) {
        return pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />);
    }

    render() {
        const { apiMeta, pokemons, handleGetPokemons } = this.props;

        return apiMeta.isLoading
            ? <span className="text-center">Loading...</span>
            : (
            <div className="row">
                {this.renderPokemonsList(pokemons.entities)}

                <button
                  type="button"
                  className="btn btn-primary btn-sm btn-block"
                  onClick={handleGetPokemons}
                >
                    Load more
                </button>
            </div>
            );
    }
}

PokemonsPage.propTypes = {
    apiMeta: PropTypes.object,
    pokemons: PropTypes.object,
    handleGetPokemons: PropTypes.func,
};

export default PokemonsPage;
