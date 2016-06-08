const expect = require('chai').expect;
const socialSecurity = require('../lib/index.js').socialSecurity;

describe('SocialSecurity', () => {

    it('should return true', () => {
        expect(socialSecurity('1234567891')).to.be.true
    });
    it('should return false', () => {
        expect(socialSecurity('yu-gi-oh')).to.be.false;
    });
});
