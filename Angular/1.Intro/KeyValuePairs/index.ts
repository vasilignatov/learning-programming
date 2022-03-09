class KeyValuePait<T, U> {
    private key: T
    private value: U;

    public setKeyValue(key:T, value:U) {
        this.key = key;
        this.value = value;
    }

    public display() {
        console.log(`key = ${this.key}, value = ${this.value}`);
    }
}

const ex = new KeyValuePait<number, string>();
ex.setKeyValue(0, 'asd');
ex.display();