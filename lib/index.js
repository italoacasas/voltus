/**
 * Dependencies
 */
const path = require('path');

/**
 * Validators
 */
const email = require('./validators/email.js');
const bankAccount = require('./validators/bankAccount.js');
const password = require('./validators/password.js');

const Validator = {
    
    email: value => {
        return email(value);
    },
    bakAccount: value => {
        return bankAccount(value);
    },
    password: value => {
        return password(value);
    }
}

module.exports = Validator