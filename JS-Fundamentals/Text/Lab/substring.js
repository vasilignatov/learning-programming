function solve(word, str){
    let arr = str.toLowerCase().split(' ');
    arr.includes(word.toLowerCase()) ? console.log(word) : console.log(`${word} not found!`);
}
solve(
'javascriptt',
'JavaScript is the best programming languagejavascriptt'
)