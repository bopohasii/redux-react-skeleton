import types from '../actions/types/pokeball.types';

const DEFAULT_STATE = {
    pokemon: {
        isEmpty: false,
        entities: {},
        types: {},
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
        case types.GET_POKEMON: return getPokemon(state, action);

        case types.GET_POKEMONS: return getPokemons(state, action);

        case types.CLEAR_DATA_STATE: return clearDataState(state, action);

        default:
            return state;
    }
};

function getPokemon(state, action) {
    // action.payload = {
    //     entities: {
    //         pokemons: {...},
    //         types: {...}
    //     },
    //     result: [...]
    // }

    return {
        ...state,
        pokemon: {
            ...state.pokemon,
            result: action.payload.result,
            entities: {
                ...action.payload.entities.pokemons,
            },
        },
    };
}

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

function clearDataState() {
    return {
        ...DEFAULT_STATE,
    };
}
