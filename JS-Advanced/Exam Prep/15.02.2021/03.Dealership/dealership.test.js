const dealership = require('./dealership');
const expect = require('chai').expect;


describe('Dealership Problem', function () {
    describe('newCarCost', function () {
        it('old car is in list', function () {
            expect(dealership.newCarCost('Audi A4 B8', 20000)).to.equal(5000);
            //overloading
            expect(dealership.newCarCost('Audi A6 4K', 25000)).to.equal(5000);
            expect(dealership.newCarCost('Audi A8 D5', 30000)).to.equal(5000);
            expect(dealership.newCarCost('Audi TT 8J', 20000)).to.equal(6000);
        })
        it('old car isn`t on the list', function () {
            expect(dealership.newCarCost('BMW X5 m50', 20000)).to.be.equal(20000);
            expect(dealership.newCarCost('BMW 335i', 1000)).to.be.equal(1000);
        })
    })
    describe('carEquipment', function () {
        it('test', function () {
            expect(dealership.carEquipment(['a'], [0])).to.deep.equal(['a']);
        })
        it('test', function () {
            expect(dealership.carEquipment(['a', 'b', 'c', 'd'], [0, 1])).to.deep.equal(['a', 'b']);
        })
        it('test', function () {
            expect(dealership.carEquipment(['a', 'b', 'c', 'd'], [0, 3])).to.deep.equal(['a', 'd']);
        })
    })
    describe('euroCategory', function() {
        it('category over 4', function() {
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`)
        })
        it('under 4', function() {
            expect(dealership.euroCategory(2)).to.equal('Your euro category is low, so there is no discount from the final price!')
        })
        it('equal 4', function() {
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`)

        })
    })
})