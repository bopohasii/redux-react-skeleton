import React, { Component, PropTypes } from 'react';
import PokemonExt from '../../pokemons/PokemonExt.jsx';

class PokemonPage extends Component {
    renderPokemonCard(pokemon = {}) {
        return (pokemon.result !== undefined)
            ? <PokemonExt pokemon={pokemon.entities[pokemon.result]} />
            : null;
    }

    render() {
        const { apiMeta, pokemon } = this.props;

        return (
            <div className="row">
                {
                    apiMeta.isLoading
                        ?
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <p className="text-center">Loading...</p>
                        </div>
                        : this.renderPokemonCard(pokemon)
                }
            </div>
        );
    }
}

PokemonPage.propTypes = {
    pokemon: PropTypes.object,
    apiMeta: PropTypes.object,
};

export default PokemonPage;
