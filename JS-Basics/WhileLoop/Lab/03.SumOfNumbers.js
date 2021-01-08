function sum(input){
    let n = Number(input[0]);
    let index = 1;

    let sum = 0;
    while(sum < n){

        let i = Number(input[index++]);
        sum += i;
    }
    console.log(sum);
    
}
sum(["100",
"10",
"20",
"30",
"40"])
