import api from '../config/apiSingleton';
import apiActions from './helpers/api.actions';
import pTypes from './types/pokeball.types';
import normalizr from '../utils/mappers/pokemons.mapper';

export const getPokemons = (params) => (dispatch) => {
    dispatch(apiActions.request(pTypes.GET_POKEMONS_REQUEST));

    return api.pokeball.getPokemons(params).then(
        (data) => {
            dispatch(apiActions.setPaginator(pTypes.GET_POKEMONS_SUCCESS, data.meta));

            dispatch(apiActions.success(pTypes.GET_POKEMONS_SUCCESS, normalizr.res.getAll(data.objects)));
        },
        (error) => {
            dispatch(apiActions.failure(pTypes.GET_POKEMONS_FAILURE, error));
        }
    );
};
