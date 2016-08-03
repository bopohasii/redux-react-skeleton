import api from '../api';
import apiActions from './api.actions';
import pTypes from './types/pokeball.types';
import normalizr from '../utils/mappers/pokemons.mapper';
import sc from '../constants/schemas.constant';

import { normalize } from 'normalizr';

export const getPokemons = (params) => (dispatch) => {
    dispatch(apiActions.request(pTypes.GET_POKEMONS));

    return api.pokeball.getPokemons(params).then(
        (data) => {
            dispatch(apiActions.paginator(pTypes.GET_POKEMONS, data.meta));

            // todo: Implement common mechanism for handle API response
            // Map API response
            const mResponse = normalizr.res.getAll(data.objects);

            // Normalize API response
            const nResponse = normalize(mResponse, sc.pokeball.getPokemons());

            dispatch(apiActions.success(pTypes.GET_POKEMONS, nResponse));
        },
        (error) => {
            dispatch(apiActions.failure(pTypes.GET_POKEMONS, error));
        }
    );
};
