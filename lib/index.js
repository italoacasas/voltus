/**
 * Dependencies
 */
const path = require('path');

/**
 * Validators
 */
const email = require('./validators/email.js');
const bankAccount = require('./validators/bankAccount.js');

const Validator = {
    
    email: value => {
        return email(value);
    },
    bakAccount: value => {
        return bankAccount(bakAccount);
    }
}

module.exports = Validator