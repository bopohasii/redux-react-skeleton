import Base from './Base';

import ep from '../constants/endPoints.constant';

class PokemonsAPI extends Base {
    getPokemons({ limit = 12, offset = 0 } = {}) {
        const url = ep.pokeball.getPokemons();
        const queryParams = offset
            ? { limit, offset: (offset + limit) }
            : { limit };

        return this.apiClient.get(url, {}, queryParams);
    }
}

export default PokemonsAPI;
