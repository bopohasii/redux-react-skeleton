import React, { Component, PropTypes } from 'react';
import Pokemon from '../../pokemons/Pokemon.jsx';

class PokemonsPage extends Component {
    renderPokemonsList(pokemons = {}) {
        return pokemons.result.map((key) => (
            <Pokemon
              key={key}
              pokemon={pokemons.entities[key]}
              allTypes={pokemons.types}
            />
        ));
    }

    render() {
        const { apiMeta, pokemons, handleGetPokemons } = this.props;

        return (
            <div className="row">
                {this.renderPokemonsList(pokemons)}

                {
                    apiMeta.isLoading
                        ?
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <p className="text-center">Loading...</p>
                        </div>
                        : (
                        <button
                          type="button"
                          className="btn btn-primary btn-sm btn-block"
                          onClick={handleGetPokemons}
                        >
                            Load more
                        </button>
                    )
                }
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
