const { sum } = require('./myModule');
const { expect, assert } = require('chai');

describe('sum function', () => {
    it('works', () =>{
        assert.equal(sum(1,2),3);
    })

    it('return NaN invalid values', () => {
        expect(sum('a', 'a')).to.be.NaN;
        // assert.isNaN(sum('a', 'a'))
    }) 

    it ('works witn numbers as string', () => {
        expect(sum('1', '2')).to.equal(3)
    })
}); 