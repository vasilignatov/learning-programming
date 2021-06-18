function solve(input) {

    let text = input.shift();
    let numberPattern = /\d/g;
    let number = text.match(numberPattern).map(Number);
    let coolThreshold = 1
    number.forEach(x => coolThreshold *= x);
    
    let emojiPattern = /(::|\*\*)[A-Z][a-z]{2,}\1/g;
    let emojes = text.match(emojiPattern);
    
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${emojes.length} emojis found in the text. The cool ones are:`);
        
    emojes.forEach(emoji => {
        let word = emoji.slice(2, -2);
        let coolFactor = 0;
        for(let i = 0; i < word.length; i++){
            coolFactor += word.charCodeAt(i);
        }
        if(coolFactor > coolThreshold){
            console.log(emoji);
        }
    })
}
solve([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
])
solve([
    '5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::'
])

solve([
    "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
])