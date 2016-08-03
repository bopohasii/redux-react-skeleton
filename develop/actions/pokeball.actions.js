import api from '../api';
import apiActions from './api.actions';
import pTypes from './types/pokeball.types';
import normalizr from '../utils/mappers/pokemons.mapper';
import pokemonSchema from '../utils/schemas/pokeball.schema';
import { normalize, arrayOf } from 'normalizr';

export const getPokemons = (params) => (dispatch) => {
    dispatch(apiActions.request(pTypes.GET_POKEMONS));

    return api.pokeball.getPokemons(params).then(
        (data) => {
            dispatch(apiActions.paginator(pTypes.GET_POKEMONS, data.meta));

            const response = normalize(normalizr.res.getAll(data.objects), arrayOf(pokemonSchema));

            dispatch(apiActions.success(pTypes.GET_POKEMONS, response));
        },
        (error) => {
            dispatch(apiActions.failure(pTypes.GET_POKEMONS, error));
        }
    );
};
