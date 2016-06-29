import ApiClient from './ApiClient';
import TodosAPI from './TodosAPI';

export default function ({ apiPrefix } = {}) {
    if (!apiPrefix) throw new Error('[apiPrefix] is required');

    const api = new ApiClient({ prefix: apiPrefix });

    return {
        todos: new TodosAPI({ apiClient: api }),
    };
}
