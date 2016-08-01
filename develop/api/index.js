import { baseUrl } from '../config/apiConfig';
import ApiClient from './ApiClient';
import { mandatory } from '../utils/valadation.helper';

import PokeballAPI from './PokeballAPI';

function apiFactory({ baseURL = mandatory('baseURL') } = {}) {
    const api = new ApiClient({ baseURL });

    return {
        pokeball: new PokeballAPI({ apiClient: api }),
    };
}

export default apiFactory({ baseURL: baseUrl });
