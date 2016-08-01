import types from '../actions/types/pokeball.types';

const DEFAULT_STATE = {
    pokemon: {
        isEmpty: false,
        entity: {},
    },
    pokemons: {
        isEmpty: false,
        entities: [],
    },
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_POKEMONS: return getPokemons(state, action);

        default:
            return state;
    }
};

function getPokemons(state, action) {
    return {
        ...state,
        pokemons: {
            ...state.pokemons,
            entities: [...state.pokemons.entities, ...action.payload],
        },
    };
}
