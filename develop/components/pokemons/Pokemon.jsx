import React, { Component, PropTypes } from 'react';

class Pokemon extends Component {
    static propTypes = {
        pokemon: PropTypes.object
    };

    renderPokemonTypes(types = []) {
        return types.map(type => <span className="label label-info">{type.name}</span>)
    }

    render() {
        const { pokemon } = this.props;

        return (
            <div className="col-xs-6 col-sm-4 col-md-3">
                <div className="card">
                    <a className="text-center">
                        <img src={pokemon.avatar} alt={pokemon.name} className="card-img-top" />
                    </a>
                    <div className="card-block">
                        <h4 className="card-title text-center">{pokemon.name}</h4>
                        <p className="card-text">{this.renderPokemonTypes(pokemon.types)}</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default Pokemon;
