import ApiClient from './ApiClient';
import PokeballAPI from './PokeballAPI';

export default function ({ apiPrefix } = {}) {
    if (!apiPrefix) throw new Error('[apiPrefix] is required');

    const api = new ApiClient({ prefix: apiPrefix });

    return {
        pokeball: new PokeballAPI({ apiClient: api }),
    };
}
