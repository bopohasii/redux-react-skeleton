'use strict';

import ApiClient from './ApiClient';
import TodosAPI  from './Todos';

export default function({apiPrefix} = {}) {
    if (!apiPrefix) throw '[apiPrefix] is required';

    const api = new ApiClient({ prefix: apiPrefix });

    return {
        todos: new TodosAPI({ apiClient: api })
    };
}
