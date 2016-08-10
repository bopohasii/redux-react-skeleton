import axios from 'axios';
import queryString from 'query-string';
import LocalStorage from '../api/LocalStorage';

class ApiClient {
    constructor({ baseURL }) {
        this.baseURL = baseURL;
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
            baseURL: this.baseURL,
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

        axios.interceptors.response.use((nextConfig) => {
            const nextConfigShallow = { ...nextConfig };

            // ...handle post apiCall data

            return nextConfigShallow;
        });

        const isPayloadMethod = !['get', 'head', 'delete'].includes(method);
        // Append 'payload' for data methods
        if (isPayloadMethod) { config.data = body; }

        return axios(config).then(
            ({ data }) => Promise.resolve(data),
            (error) => Promise.reject(error)
        );
    }
}

export default ApiClient;

