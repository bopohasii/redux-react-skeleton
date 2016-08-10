import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import routes from '../../constants/routes.constatnt';

class Pokemon extends Component {

    renderPokemonTypes(types = [], allTypes) {
        return types.map(tKey => <span key={tKey} className="label label-info">{allTypes[tKey].name}</span>);
    }

    render() {
        const { pokemon, allTypes } = this.props;
        const pokemonRoute = routes.pokeball.getPokemon(pokemon.id);

        return (
            <div className="col-xs-6 col-sm-4 col-md-3">
                <div className="card">
                    <a className="text-center">
                        <img src={pokemon.avatar} alt={pokemon.name} className="card-img-top" />
                    </a>
                    <div className="card-block">
                        <h4 className="card-title text-center">{pokemon.name}</h4>
                        <p className="card-text">{this.renderPokemonTypes(pokemon.types, allTypes)}</p>
                        <Link to={pokemonRoute} className="btn btn-secondary">Go details</Link>
                    </div>
                </div>
            </div>
        );
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.object,
    allTypes: PropTypes.object,
};

export default Pokemon;
