'use strict';

/**
 * Validators
 */
const email = require('./validators/email.js');
const password = require('./validators/password.js');
const phone = require('./validators/phone.js');
const socialSecurity = require('./validators/socialSecurity.js');
const number = require('./validators/number.js');

const Validator = {

    email: value => {
        return email(value);
    },
    password: value => {
        return password(value);
    },
    phone: value => {
        return phone(value);
    },
    socialSecurity: value => {
        return socialSecurity(value);
    },
    number: value => {
        return number(value);
    }
};

module.exports = Validator;
