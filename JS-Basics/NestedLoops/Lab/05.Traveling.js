    function solve(input) {
        let index = 0;
        let inputLine = input[index];
        let sumSaved = 0;

        while (inputLine !== 'End') {
            inputLine = input[index]
            let destination = inputLine;
            index++;
            let price = Number(input[index++]);


            while (price > sumSaved) {
                let currentSave = Number(input[index]);
                sumSaved += currentSave;
                if (price <= sumSaved){
                    console.log(`Going to ${destination}!`);
                    sumSaved = 0;
                    index++;
                    break;
                }
                index++;
            }
        }
}
solve(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

