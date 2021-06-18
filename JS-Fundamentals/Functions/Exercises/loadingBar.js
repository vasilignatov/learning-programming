function loadingBar(num) {
    function bar(num) {
        let n = num / 10;
        let bar = '';
        for (let i = 1; i <= 10; i++) {
            if (n !== 0) {
                bar += '%';
                n--
            } else {
                bar += '.';
            }
        }
        return bar;
    }

    if (num != 100) {
        console.log(`${num}% [${bar(num)}]`);
        console.log(`Still loading...`);
    } else {
        console.log(`100% Complete!`);
        console.log(`${num}% [${bar(num)}]`);
    }
}
loadingBar(30)  