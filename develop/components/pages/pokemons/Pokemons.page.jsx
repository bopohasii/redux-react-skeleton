import React, { Component, PropTypes } from 'react';
import Waypoint from 'react-waypoint';
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

    renderWaypoint() {
        const { apiMeta, handleGetPokemons } = this.props;

        if (apiMeta.isLoading) {
            return (
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <p className="text-center">Loading...</p>
                </div>
            );
        }

        // todo: need investigation
        return [
            <div
              style={{ width: '100%', border: '1px dashed black', height: 10, background: 'yellow', clear: 'both' }}
            > Warning: Be carefull with css float: 'left' </div>,
            <Waypoint threshold={0.2} onEnter={handleGetPokemons} />,
        ];
    }

    render() {
        const { pokemons } = this.props;
        const style = { height: 500, overflowY: 'auto', position: 'relative', outline: '1px solid red' };

        return (
            <div className="row" style={style}>
                {this.renderPokemonsList(pokemons)}
                {this.renderWaypoint()}
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
