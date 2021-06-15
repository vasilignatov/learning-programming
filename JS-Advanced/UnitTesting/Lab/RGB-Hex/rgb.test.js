const { expect } = require('chai');
const rgbToHexColor = require('./rgb');

describe('RGBtoHEX', () => {
    it('convert black', () => {
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    });

    it('convert white', () => {
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
    });

    it('convert red', () => {
        expect(rgbToHexColor(255,0,0)).to.equal('#FF0000');
    });

    it('convert green', () => {
        expect(rgbToHexColor(0,255,0)).to.equal('#00FF00');
    });

    it('convert blue', () => {
        expect(rgbToHexColor(0,0,255)).to.equal('#0000FF');
    });

    it('convert (151, 104, 172)', () => {
        expect(rgbToHexColor(151, 104, 172)).to.equal('#9668AC');
    });

    it('returns undefined for string prams', () => {
        expect(rgbToHexColor('a', 'a', 'a')).to.be.undefined;
    });

    it('returns undefined for negative values', () => {
        expect(rgbToHexColor(-0, 0, 0)).to.be.undefined;
    });
    
    it('returns undefined for values > 255', () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    });
});