'use strict';

const expect = require('chai').expect;
const number = require('../lib/index.js').number;

describe('Number', () => {

    it('should return true', () => {
        expect(number(123456)).to.be.true;
    });
    it('should return false', () => {
        expect(number('asd')).to.be.false;
    });
});
