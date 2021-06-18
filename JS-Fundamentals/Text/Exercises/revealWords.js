function solve(words, str){

    words = words.split(', ');
    words.forEach(word => {
        let charCount = '*'.repeat(word.length);
        str = str.replace(charCount, word)
    });
    console.log(str);
}
solve(
'great',
'softuni is ***** place for learning new programming languages'
)
solve(
'great, learning',
'softuni is ***** place for ******** new programming languages'
)