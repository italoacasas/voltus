/**
 * Dependencies
 */
const path = require('path');

/**
 * Validators
 */
const email = require('./validators/email.js');

module.exports = function (value) {

    return email(value);
}
