import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import routes from '../../constants/routes.constatnt';

class PokemonExt extends Component {

    renderPokemonTypes(types = [], allTypes) {
        return types.map(tKey => <span key={tKey} className="label label-info">{allTypes[tKey].name}</span>);
    }

    render() {
        const { pokemon } = this.props;
        const pokemonsRoute = routes.pokeball.getPokemons();
        const center = { textAlign: 'center' };

        return (
            <div className="col-xs-6 col-xs-offset-3 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
                <div className="row">
                    <div className="thumbnail text-center">
                        <p style={center}>
                            <img src={pokemon.avatar} alt={pokemon.name} className="img-circle" />
                        </p>
                        <div className="caption">
                            <h4 style={center}>{pokemon.name} #{pokemon.id}</h4>
                            <table className="table">
                                <tr>
                                    <td>Attack</td>
                                    <td>{pokemon.attack}</td>
                                </tr>
                                <tr>
                                    <td>Defense</td>
                                    <td>{pokemon.defense}</td>
                                </tr>
                                <tr>
                                    <td>HP</td>
                                    <td>{pokemon.hp}</td>
                                </tr>
                                <tr>
                                    <td>SP Attack</td>
                                    <td>{pokemon.spAtk}</td>
                                </tr>
                                <tr>
                                    <td>SP Defence</td>
                                    <td>{pokemon.spDef}</td>
                                </tr>
                                <tr>
                                    <td>Speed</td>
                                    <td>{pokemon.speed}</td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td>{pokemon.weight}</td>
                                </tr>
                                <tr>
                                    <td>Total moves</td>
                                    <td>{pokemon.totalMoves}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <Link to={pokemonsRoute} className="btn btn-secondary">back</Link>
                                    </td>
                                </tr>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

PokemonExt.propTypes = {
    pokemon: PropTypes.object,
};

export default PokemonExt;
