function table(num) {
    num = Number(num);
    for(let i = 1; i <=10; i++){
        let sum = num * i;
        console.log(`${i} * ${num} = ${sum}`);
    }
}
table("1")