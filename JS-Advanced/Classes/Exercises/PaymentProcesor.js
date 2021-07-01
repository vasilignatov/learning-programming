const { expect } = require('chai');

class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value    
        this.active = true; // Default value
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}



describe('payment package', () => {
    it('constructor', () => {
        let instance = new PaymentPackage('Name', 100);
        expect(instance._name).to.equal('Name');
        expect(instance._value).to.equal(100);
        expect(instance._VAT).to.equal(20);
        expect(instance._active).to.true;
    })
    it('name', () => {
        let instance = new PaymentPackage('Name', 100);
        expect(instance.name).to.be.equal('Name');

        instance.name = 'Pesho';
        expect(instance.name).to.be.equal('Pesho')



        expect(() => { instance.name = '' }).to.throw(Error, 'Name must be a non-empty string');
        expect(() => { instance.name = 2 }).to.throw(Error, 'Name must be a non-empty string');
        expect(() => { instance.name = undefined }).to.throw(Error, 'Name must be a non-empty string');
    })
    it('VAT', () => {
        let instance = new PaymentPackage('Name', 100);
        expect(instance.VAT).to.be.equal(20);

        instance.VAT = 40;
        expect(instance.VAT).to.be.equal(40);



        expect(() => { instance.VAT = -2 }).to.throw(Error, 'VAT must be a non-negative number');
        expect(() => { instance.VAT = '' }).to.throw(Error, 'VAT must be a non-negative number');

    })
    it('value', () => {

        let instance = new PaymentPackage('Name', 100);
        expect(instance.value).to.be.equal(100);

        instance.value = 50;
        expect(instance.value).to.be.equal(50)

        expect(() => { instance.value = '' }).to.throw(Error, 'Value must be a non-negative number');
        expect(() => { instance.value = undefined }).to.throw(Error, 'Value must be a non-negative number');
        expect(() => { instance.value = -2 }).to.throw(Error, 'Value must be a non-negative number');
    })


    it('active', () => {
        let instance = new PaymentPackage('Name', 100);

        expect(instance.active).to.true;

        instance.active = false;
        expect(instance.active).to.false;


        expect(() => { instance.active = 5 }).to.throw(Error, 'Active status must be a boolean');
        expect(() => { instance.active = '' }).to.throw(Error, 'Active status must be a boolean');
        expect(() => { instance.active = undefined }).to.throw(Error, 'Active status must be a boolean');
    })

    it('toString', () => {
        let instance = new PaymentPackage('Name', 100);

        function getString(name, value, VAT, active) {
            return [
                `Package: ${name}` + (active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${value}`,
                `- Value (VAT ${VAT}%): ${value * (1 + VAT / 100)}`
            ].join('\n');
        }
        expect(instance.toString()).to.be.equal(getString('Name', 100, 20, true));

        instance.active = false;
        expect(instance.toString()).to.be.equal(getString('Name', 100, 20, false));

        instance.VAT = 200;
        expect(instance.toString()).to.be.equal(getString('Name', 100, 200, false));

        instance.name = 'Gosho';
        expect(instance.toString()).to.be.equal(getString('Gosho', 100, 200, false));

        instance.value = 2;
        expect(instance.toString()).to.be.equal(getString('Gosho', 2, 200, false));
    })
})