function cityTaxes(name, population, treasury) {
    return {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            return this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            return this.population += Math.ceil(this.population * percentage / 100);
        },
        applyRecession(percentage) {
            return this.treasury -= Math.ceil(this.treasury * percentage / 100);
        }
    }
}
const city =
    cityTaxes('Tortuga',
        7000,
        15000);

console.log(city);
city.applyGrowth(100);
city.applyRecession(99);
console.log(city);

