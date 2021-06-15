const { expect, assert } = require('chai');
const isSymetric = require('./symetric');

describe('symetric', () => {
    it('type checking', () => {
        expect(isSymetric([1, 1])).to.true;
    });

    it('non symmetric input', () => {
        expect(isSymetric([1, 2])).to.be.false;
    });

    it('invalid argument', () => {
        expect(isSymetric('a')).to.be.false;
    });

    // Test overloading

    it('invalid argument', () => {
        expect(isSymetric([1, 1, 1])).to.true;
    });

    it('valid symmetric string arr', () => {
        expect(isSymetric(['a', 'a'])).to.true;
    });

    it('unvalid unsymmetric string arr', () => {
        expect(isSymetric('a', 'b')).to.be.false;
    });

    it('unvalid unsymmetric mixed array', () => {
        expect(isSymetric(1, '1')).to.be.false;
    });
})