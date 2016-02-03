'use strict';

import queryString from 'query-string';

require('isomorphic-fetch');

class ApiClient {
    constructor({ prefix }) {
        this.prefix = prefix;
    }

    get(requestUrl, payload = {}, params = {} ) {
        return this.request({
            url: requestUrl,
            method: 'get',
            body: payload,
            params
        });
    }

    put(requestUrl, payload = {}) {
        return this.request({
            url: requestUrl,
            method: 'put',
            body: payload
        });
    }

    patch(requestUrl, payload = {}) {
        return this.request({
            url: requestUrl,
            method: 'put',
            body: payload
        });
    }

    post(requestUrl, payload = {}) {
        return this.request({
            url: requestUrl,
            method: 'post',
            body: payload
        });
    }

    delete(requestUrl) {
        return this.request({
            url: requestUrl,
            method: 'delete'
        });
    }

    request({ url, method, params = {}, body }) {
        /**
         * Set Auth token to 'query params'
         */
        if (this.authToken) {
            params.token = this.authToken;
        }

        /**
         * Set 'query params' to GET request
         */
        const urlWithQuery = `${url}?${queryString.stringify(params)}`;

        const init = {
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };

        if (method !== 'get' && method !== 'head') {
            init.body = body;
        }

        return fetch(`${this.prefix}/${urlWithQuery}`, init)
            .then(checkStatus)
            .then((response) => response.json())
            .then((data) => data)
            .catch((error) => Promise.reject(error));

        function checkStatus(response) {
            if (response.status >= 200 && response.status < 300) {
                return response;
            } else {
                const error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
        }
    }

    setAuthToken(authToken) {
        this.authToken = authToken;
    }
}

export default ApiClient;

