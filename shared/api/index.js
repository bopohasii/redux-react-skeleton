'use strict';

import ApiClient      from './ApiClient';
import MoviesAPI       from './Movies';

export default function({apiPrefix} = {}) {
    if (!apiPrefix) {
        throw '[apiPrefix] required';
    }

    const api = new ApiClient({ prefix: apiPrefix });

    return {
        movies: new MoviesAPI({ apiClient: api })
    };
}
