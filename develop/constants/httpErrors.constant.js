const statuses = {
    400: {
        message: 'bad request',

        handler: () => {},
    },
    401: {
        message: 'unauthorized',
        handler: () => {},
    },
    402: {
        message: 'payment required',
        handler: () => {},
    },
    403: {
        message: 'forbidden',
        handler: () => {},
    },
    404: {
        message: 'not found',
        handler: () => {},
    },
    405: {
        message: 'method not allowed',
        handler: () => {},
    },
    500: {
        message: 'internal server error',
        handler: () => {},
    },

    0: {
        message: 'unhandled status',
        handler: () => {},
    },
};

export const httpStatusHandler = (status = 0) => {
    const unhandledStatus = 0;
    let normalizedStatus = status;

    if (status > 405 && status < 500) { normalizedStatus = 400; }
    if (status >= 500) { normalizedStatus = 500; }

    return statuses.hasOwnProperty(normalizedStatus)
        ? statuses[normalizedStatus]
        : statuses[unhandledStatus];
};
