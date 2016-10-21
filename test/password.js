'use strict';

const expect = require('chai').expect;
const password = require('../lib/index.js').password;

describe('Password', () => {

    it('should return true', () => {
        expect(password('Aasda1')).to.be.true;
    });
    it('should return false', () => {
        expect(password('asd')).to.be.false;
    });
});
