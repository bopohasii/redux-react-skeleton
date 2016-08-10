import { mandatory } from '../utils/valadation.helper';

class Base {
    constructor({ apiClient = mandatory('apiClient') }) {
        this.apiClient = apiClient;
    }
}

export default Base;

