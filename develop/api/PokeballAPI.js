import Base from './Base';

import ep from '../constants/endPoints.constant';

class PokeballAPI extends Base {
    getPokemons({ limit, offset }) {
        const url = ep.pokeball.getPokemons();
        const queryParams = (offset !== undefined)
            ? { limit, offset: (offset + limit) }
            : { limit };

        return this.apiClient.get(url, {}, queryParams);
    }
}

export default PokeballAPI;
