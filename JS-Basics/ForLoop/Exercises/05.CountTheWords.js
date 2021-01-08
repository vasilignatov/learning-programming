function words(arg1) {
    let wordsCount = 1;
    for (let i = 0; i < arg1.length; i++) {
        let current = arg1[i];

        if (current === " ") {
            wordsCount++;
        }
    }

    if (wordsCount >10){
        console.log(`The message is too long to be send! Has ${wordsCount} words.`);
    }else {
        console.log(`The message was send successfully!`);
    }
}
words("This");