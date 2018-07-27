'use strict'

class NotFound extends Error {
    constructor (message, status) {
        super(message);

        this.name = 'Not Found';

        Error.captureStackTrace(this, this.constructor);

        this.status = 404 || status
    }
}

class Unauthorized extends Error {
    constructor (message, status) {
        super(message);

        this.name = 'Unauthorized';

        Error.captureStackTrace(this, this.constructor);

        this.status = 403 || status
    }
}

module.exports = {
    NotFound,
    Unauthorized
}

