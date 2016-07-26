import ApiClient from './ApiClient';
import PokemonsAPI from './PokemonsAPI';

export default function ({ apiPrefix } = {}) {
    if (!apiPrefix) throw new Error('[apiPrefix] is required');

    const api = new ApiClient({ prefix: apiPrefix });

    return {
        pokemons: new PokemonsAPI({ apiClient: api }),
    };
}
