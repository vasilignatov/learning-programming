function solve() {

    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
    
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`; 
        }
        
    }
    
    const newPerson = new Person('Boiko', 'Borisov', 1000, 'gei@mail.bg');
    
    return newPerson.toString();
}



