class List {
    constructor() {
        this.arr = [];
        this.size = 0;
    }

    add(num) {
        this.arr.push(num) 
        this.size += 1;
        return this.arr.sort((a, b) => a - b)
    }
    
    remove(index) {
        if (index >= 0 && index < this.arr.length) {
            this.size -= 1;
            return this.arr.splice(index, 1);
        } else {
            throw new Error('invalid index');
        }
    }
    
    get(index) {
        if (index >= 0 && index < this.arr.length) {
            return this.arr[index];
        } else throw new Error('invalid index');
    }
}


let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size)
