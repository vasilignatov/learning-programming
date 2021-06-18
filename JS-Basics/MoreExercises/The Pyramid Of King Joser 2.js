function pyramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let pyramidHeight = 0;
    let isGold = false;
    let isLapis = false;
    let currentPerimeter = 0;

    for (let row = base; row >= 1; row -= 2) {
        let currentStone = 0;
        pyramidHeight++;

        let currentRow = row * row;

        if (pyramidHeight % 5 == 0) {
            isLapis = true;
        }
        if (row <= 2) {
            isGold = true;
            gold += currentRow * increment;
            break;
        }
        if (!isGold) {
            currentPerimeter = row * 4 - 4;
            currentStone = currentRow - currentPerimeter;
            stone += currentStone * increment;

            if(!isLapis){
                marble += currentPerimeter * increment;
            } else {
                lapis += currentPerimeter * increment;
                isLapis = false;
            }
        } 
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight * increment)}`);
}
pyramid(11, 1)