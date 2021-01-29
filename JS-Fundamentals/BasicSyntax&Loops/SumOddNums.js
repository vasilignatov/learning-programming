function solve(n) {
    let current = 1;
    let sum = 0;
    let counter = 0;
    while (counter != n) {
       sum += current;
       console.log(current);
       current += 2;
       counter++;
    }
    console.log(`Sum: ${sum}`);
 }