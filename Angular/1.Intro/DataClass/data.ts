class Data {
    response: string;
    fulfilled: boolean;
    constructor(public method: string, public uri: string, public version: string, public message: string) {
        this.response = undefined;
        this.fulfilled = false;
    }
}

const myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);


