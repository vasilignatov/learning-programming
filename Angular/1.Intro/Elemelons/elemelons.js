class Melons {
    constructor(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
}
class Watermelon extends Melons {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.element = 'Watermelon';
    }
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
    toString() {
        return `Element: ${this.element}\n
        Sort: ${this.melonSort}\n
        Element Index: ${this.elementIndex}`;
    }
}
class Firemelon extends Melons {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.element = 'Firemelon';
    }
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
    toString() {
        return `Element: ${this.element}\n
        Sort: ${this.melonSort}\n
        Element Index: ${this.elementIndex}`;
    }
}
class Earthmelon extends Melons {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.element = 'Earthmelon';
    }
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
    toString() {
        return `Element: ${this.element}\n
        Sort: ${this.melonSort}\n
        Element Index: ${this.elementIndex}`;
    }
}
class Airmelon extends Melons {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.element = 'Airmelon';
    }
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
    toString() {
        return `Element: ${this.element}\n
        Sort: ${this.melonSort}\n
        Element Index: ${this.elementIndex}`;
    }
}
class Melolemonmelon extends Watermelon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.element = 'Water';
        this.elementsState = ['Water', 'Fire', 'Earth', 'Air'];
    }
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
    morph() {
        const current = this.elementsState.shift();
        this.element = this.elementsState[0];
        this.elementsState.push(current);
    }
    toString() {
        return `Element: ${this.element}\n
        Sort: ${this.melonSort}\n
        Element Index: ${this.elementIndex}`;
    }
}
const water = new Watermelon(25, 'asdfadaf');
const earth = new Earthmelon(15, 'adaf');
const asd = new Melolemonmelon(5, 'adaf');
console.log(asd.toString());
console.log(asd.morph());
console.log(asd.toString());
console.log(asd.morph());
console.log(asd.toString());
console.log(asd.morph());
console.log(asd.toString());
console.log(asd.morph());
console.log(asd.toString());
