function wordsTracker(input){

    let words = input.shift().split(' ');
    let wordsCounter = {}

    for(let word of words){
        wordsCounter[word] = 0;
    }
    for(let word of input){
        if (wordsCounter.hasOwnProperty(word)){
            wordsCounter[word]++;
        }
    }
    Object.keys(wordsCounter)
    .sort((a,b) => wordsCounter[b] - wordsCounter[a])
    .forEach(word => console.log(`${word} - ${wordsCounter[word]}`))
}
wordsTracker([
    'this sentence', 
    'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ])