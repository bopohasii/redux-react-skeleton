import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from './../containers/App.jsx';
import Layout from './../containers/layouts/Layout.container.jsx';
import Pokemon from '../containers/pokemons/Pokemon.container.jsx';
import Pokemons from '../containers/pokemons/Pokemons.container.jsx';

export default (
    <Route path="/" component={App}>
        <Route component={Layout}>
            <IndexRedirect to="pokemons" />

            <Route path="pokemons">
                <IndexRoute component={Pokemons} />

                <Route path=":pokemonId" component={Pokemon} />
            </Route>

        </Route>
    </Route>
);
