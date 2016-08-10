import { arrayOf } from 'normalizr';

import pokemonSchema from '../utils/schemas/pokeball.schema';

export default {
    pokeball: {
        getPokemons: () => arrayOf(pokemonSchema),
        getPokemon: () => pokemonSchema,
    },
};
