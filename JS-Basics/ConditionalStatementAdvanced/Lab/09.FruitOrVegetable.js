function meal(arg1) {
    arg1 = String(arg1);

    if (arg1 === 'banana' || arg1 === 'apple' || arg1 === 'kiwi' || arg1 === 'cherry' || arg1 === 'lemon' || arg1 === 'grapes') {
        console.log('fruit');
    } else if (arg1 === 'tomato' || arg1 === 'cucumber' || arg1 === 'pepper' || arg1 === 'carrot') {
        console.log('vegetable');
    } else {
        console.log('unknown');
    }
}