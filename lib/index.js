/**
 * Dependencies
 */
const path = require('path');

/**
 * Validators
 */
const email = require('./validators/email.js');

const Validator = {
    email: value => {
        return email(value);
    }
}

module.exports = Validator