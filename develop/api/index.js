import ApiClient from './ApiClient';
import { baseUrl } from '../config/appConfig';
import { mandatory } from '../utils/valadation.helper';

import PokeballAPI from './PokeballAPI';

function apiFactory({ baseURL = mandatory('baseURL') } = {}) {
    const api = new ApiClient({ baseURL });

    return {
        pokeball: new PokeballAPI({ apiClient: api }),
    };
}

export default apiFactory({ baseURL: baseUrl });
