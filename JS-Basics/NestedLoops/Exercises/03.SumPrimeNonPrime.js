function solve(input) {
    let index = 0;
    let inputLine = input[index];
    let primeNumSum = 0;
    let nonPrimeNumSum = 0;

    while (inputLine !== 'stop') {
        let num = Number(inputLine)

        if ( num < 0){
            console.log(`Number is negative.`);
        }else if (num === 1){
            nonPrimeNumSum += num;
        }   else{
            let count = 0;
            for (let i = 1; i <= num; i++) {
                if (num % i === 0){
                    count++;
                }
            }

            if (count === 2){
                primeNumSum += num;
            }else {
                nonPrimeNumSum += num;
            }
        }
        inputLine = input[++index];

        }
    console.log(`Sum of all prime numbers is: ${primeNumSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNumSum}`);
}
solve(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"])
