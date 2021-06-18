function pyramid(base, increment) {
    let pyramidHeight = 0;

    let stones = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let marble = 0;
    let isGold = false;
    let isLapis = false;

    for (let row = base; row >= 1; row -= 2) {
        let currentRow = row * row;
        let currentDecorate = currentRow - ((row - 2) * (row - 2));
        if (row <= 2) {
            isGold = true;
        }
        if (!isGold) {
            let currentStones = currentRow - currentDecorate;
            stones += currentStones * increment;
        } else {
            gold += currentRow * increment;
        }
        pyramidHeight++;
        if (pyramidHeight % 5 === 0) {
            isLapis = true;
        }
        if (isLapis && !isGold) {
            lapisLazuli += currentDecorate * increment;
            isLapis = false
        } else if (!isGold && !isLapis) {
            marble += currentDecorate * increment;
        }
    }
    console.log(`Stone required: ${Math.ceil(stones)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight * increment)}`);
}
pyramid(23,
    0.5
    )