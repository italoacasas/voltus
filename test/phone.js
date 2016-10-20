'use strict';

const expect = require('chai').expect;
const phone = require('../lib/index.js').phone;

describe('Phone', () => {

    it('should return true', () => {
        expect(phone('305-305-3056')).to.be.true;
    });
    it('should return false', () => {
        expect(phone('yu-gi-oh')).to.be.false;
    });
});
