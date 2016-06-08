const expect = require('chai').expect;
const email = require('../lib/index.js').email;

describe('Email', () => {

    it('should return true', () => {
        expect(email('testing@gmail.com')).to.be.true
    });
    it('should return false', () => {
        expect(email('yu-gi-oh')).to.be.false;
    });
});
