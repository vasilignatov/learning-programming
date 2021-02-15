function solve(source) {

    let extractedAmount = 0;
    let days = 0;

    while (source >= 100) {
        extractedAmount += source;
        source -= 10;
        days++;
        extractedAmount -= 26;
    
        if (extractedAmount < 26 || source < 100){
            break;
        }
    }
    extractedAmount -= 26;
    
    console.log(days);
    console.log(extractedAmount);
}
solve(450)