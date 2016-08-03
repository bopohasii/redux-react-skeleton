import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPokemons, clearDataState } from '../../actions/pokeball.actions';
import apiActions from '../../actions/api.actions';
import pTypes from '../../actions/types/pokeball.types';

import PokemonsPage from '../../components/pages/pokemons/Pokemons.page.jsx';

class PokemonsContainer extends Component {

    componentDidMount() {
        this.props.handleGetPokemons({ limit: 12 });
    }

    componentWillUnmount() {
        this.props.handleClearApiState(pTypes.GET_POKEMONS);

        this.props.handleClearDataState();
    }

    handleGetPokemonsNext() {
        const { apiMeta: { paginator }, handleGetPokemons } = this.props;

        handleGetPokemons({ ...paginator });
    }

    render() {
        const { apiMeta, pokemons } = this.props;

        return (
            <PokemonsPage
              apiMeta={apiMeta}
              pokemons={pokemons}
              handleGetPokemons={this.handleGetPokemonsNext.bind(this)}
            />
        );
    }
}

PokemonsContainer.propTypes = {
    pokemons: PropTypes.object,
    apiMeta: PropTypes.object,
    handleGetPokemons: PropTypes.func,
    handleClearApiState: PropTypes.func,
    handleClearDataState: PropTypes.func,
};

const mapStateToProps = (state) => ({
    // todo: set init value for apiMeta
    apiMeta: state.api[pTypes.GET_POKEMONS] || {},
    pokemons: state.pokeball.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
    handleGetPokemons: bindActionCreators(getPokemons, dispatch),
    handleClearApiState: bindActionCreators(apiActions.clearState, dispatch),
    handleClearDataState: bindActionCreators(clearDataState, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsContainer);
