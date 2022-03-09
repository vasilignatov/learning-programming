

abstract class Employee {
    public salary: number;
    public tasks: Array<string>

    constructor(public name: string, public age: number) {
        this.salary = 0;
        this.tasks = [];
    }

    public work(): void {
        const currentTask = this.tasks.shift();
        this.tasks.push(currentTask);
        console.log(this.name + currentTask);
    }

    public collectSalary(): void {
        console.log(`${this.name} received ${this.getSalary()} this month.`);
    }

    public getSalary(): number {
        return this.salary;
    }
}

class Junior extends Employee {
    constructor(name, age) {
        super(name, age);
        this.tasks.push(' is working a simple task.');
    }
}

class Senior extends Employee {
    constructor(name, age) {
        super(name, age);
        this.tasks.push(' is working a complicated task 1.')
        this.tasks.push(' is working a complicated task 2.')
        this.tasks.push(' is working a complicated task 3.')
    }
}

class Manager extends Employee {
    public divident: number
    constructor(name, age) {
        super(name, age);
        this.divident = 0;
        this.tasks.push('Meetings');
        this.tasks.push('Laf muabet');
    }

    public getSalary(): number {
        return this.salary + this.divident;
    }
}