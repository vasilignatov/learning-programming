function createHeart(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suitToStr = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663' 
    };

    if(validFaces.includes(face) == false){
        throw new Error('Invalid Face');
    } else if(Object.keys(suitToStr).includes(suit) == false){
        throw new Error('Invalid Suit');        
    }

    return {
        face, 
        suit, 
        toString() {
            return `${face}${suitToStr[suit]}`
        }
    }
}
const myCard = 
createHeart('10', 'H');
// createHeart('1', 'C');
console.log(myCard.toString());