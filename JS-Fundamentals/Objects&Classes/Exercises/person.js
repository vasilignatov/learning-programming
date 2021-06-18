function solve(input) {
    class Person {
        constructor(name, num) {
            this.name = name;
            this.num = name.length
        }
        print() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.num}`)
        }
    }
    input = input
        .map(x => new Person(x))
        .forEach(element => element.print());
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])