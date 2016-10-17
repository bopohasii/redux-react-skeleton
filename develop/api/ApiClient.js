import axios from 'axios';
import queryString from 'query-string';

class ApiClient {
    constructor({ baseURL }) {
        this.baseURL = baseURL;
    }

    get(requestUrl, payload = {}, params = {}) {
        return this.request({
            url: requestUrl,
            method: 'get',
            data: payload,
            params,
        });
    }

    put(requestUrl, payload = {}) {
        return this.request({
            url: requestUrl,
            method: 'put',
            data: payload,
        });
    }

    post(requestUrl, payload = {}) {
        return this.request({
            url: requestUrl,
            method: 'post',
            data: payload,
        });
    }

    postFormData(requestUrl, formData) {
        return this.request({
            url: requestUrl,
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: formData,
        });
    }

    patch(requestUrl, payload = {}) {
        return this.request({
            url: requestUrl,
            method: 'patch',
            data: payload,
        });
    }

    delete(requestUrl) {
        return this.request({
            url: requestUrl,
            method: 'delete',
        });
    }

    request({ url, method, params = {}, headers, data }) {
        const config = {
            url,
            method,
            baseURL: this.baseURL,
            params,
            paramsSerializer(p) {
                return queryString.stringify(p, { encode: true });
            },
            headers: headers || { 'Content-Type': 'application/json' },
            data,
        };

        // Add a request interceptor
        axios.interceptors.request.use(
            (request) => request,
            (error) => Promise.reject(error)
        );

        // Add a response interceptor
        axios.interceptors.response.use(
            (response) => response,
            (error) => Promise.reject(error)
        );

        return axios(config).then(
            (response) => Promise.resolve(response.data),
            (response) => Promise.reject(response.data)
        );
    }
}

export default ApiClient;

