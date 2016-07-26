'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PokemonsPage from '../../components/pages/pokemons/Pokemons.page.jsx';


class PokemonsContainer extends Component {
    static propTypes = {

    };

    componentDidMount() {
        // Use for pre-loading component data
    }

    render() {
        return (
            <PokemonsPage />
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {
        // handleAddTodo: bindActionCreators(addTodo, dispatch),
        // handleClearAll: bindActionCreators(clearAll, dispatch),
        // handleTodoComplete: bindActionCreators(completeTodo, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsContainer);
