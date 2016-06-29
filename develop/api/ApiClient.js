import axios from 'axios';
import queryString from 'query-string';
import LocalStorage from '../api/LocalStorage';

class ApiClient {
    constructor({ prefix }) {
        this.prefix = prefix;
    }

    get(requestUrl, payload = {}, params = {}) {
        return this.request({
            url: requestUrl,
            method: 'get',
            body: payload,
            params,
        });
    }

    put(requestUrl, payload = {}) {
        return this.request({
            url: requestUrl,
            method: 'put',
            body: payload,
        });
    }

    post(requestUrl, payload = {}) {
        return this.request({
            url: requestUrl,
            method: 'post',
            body: payload,
        });
    }

    delete(requestUrl) {
        return this.request({
            url: requestUrl,
            method: 'delete',
        });
    }

    request({ url, method, params = {}, body }) {
        const config = {
            method,
            baseURL: `${this.prefix}`,
            url: params && Object.keys(params).length ? `${url}?${queryString.stringify(params)}` : `${url}`,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        axios.interceptors.request.use((nextConfig) => {
            const nextConfigShallow = { ...nextConfig };
            const authToken = LocalStorage.get('auth_token');
            // Append 'auth header' for restriction pages
            if (authToken) {
                // Custom security header
                nextConfigShallow.headers['x-wsse'] = authToken;
            }

            return nextConfigShallow;
        });

        const isPayloadMethod = !['get', 'head', 'delete'].includes(method);
        // Append 'payload' for data methods
        if (isPayloadMethod) { config.data = body; }

        return axios(config)
            .then(({ data }) => Promise.resolve(data))
            .catch((error) => Promise.reject(error));
    }
}

export default ApiClient;

