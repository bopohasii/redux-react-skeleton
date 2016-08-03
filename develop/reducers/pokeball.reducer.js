import types from '../actions/types/pokeball.types';

const DEFAULT_STATE = {
    pokemon: {
        isEmpty: false,
        entity: {},
    },
    pokemons: {
        isEmpty: false,
        result: [],
        entities: {},
        types: {},
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
    // action.payload = {
    //     entities: {
    //         pokemons: {...},
    //         types: {...}
    //     },
    //     result: [...]
    // }

    return {
        ...state,
        pokemons: {
            ...state.pokemons,
            result: [...state.pokemons.result, ...action.payload.result],
            entities: {
                ...state.pokemons.entities,
                ...action.payload.entities.pokemons,
            },
            types: {
                ...state.pokemons.types,
                ...action.payload.entities.types,
            },
        },
    };
}
