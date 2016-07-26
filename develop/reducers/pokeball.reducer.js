import types from '../actions/types/pokeball.types';

const DEFAULT_STATE = {
    pokemon: {
        isLoading: false,
        isEmpty: false,
        entity: {},
        error: null,
    },
    pokemons: {
        isLoading: false,
        isEmpty: false,
        entities: [],
        error: null,
    },
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_POKEMONS_REQUEST: return getPokemonsRequest(state);
        case types.GET_POKEMONS_SUCCESS: return getPokemonsSuccess(state, action);
        case types.GET_POKEMONS_FAILURE: return getPokemonsFailure(state, action);

        default:
            return state;
    }
};

function getPokemonsRequest(state) {
    return {
        ...state,
        pokemons: {
            ...state.pokemons,
            isLoading: true,
        },
    };
}


function getPokemonsSuccess(state, action) {
    return {
        ...state,
        pokemons: {
            ...state.pokemons,
            isLoading: false,
            entities: [...state.pokemons.entities, ...action.payload],
        },
    };
}

function getPokemonsFailure(state, action) {
    return {
        ...state,
        pokemons: {
            ...state.pokemons,
            isLoading: false,
            error: action.payload.error,
        },
    };
}
