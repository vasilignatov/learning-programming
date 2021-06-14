function closure() {
    let counter = 0;

    return function() {
        counter++;
        console.log(counter);
    }
}

const cc = closure();
cc()
cc()
cc()
cc()

const cc2 = closure();
cc2()
cc2()
cc()
cc()
