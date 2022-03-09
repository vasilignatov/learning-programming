class KeyValuePait {
    setKeyValue(key, value) {
        this.key = key;
        this.value = value;
    }
    display() {
        console.log(`key = ${this.key}, value = ${this.value}`);
    }
}
const ex = new KeyValuePait();
ex.setKeyValue(0, 'asd');
ex.display();
