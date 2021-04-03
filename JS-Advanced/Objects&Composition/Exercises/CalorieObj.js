function calorie(input){
    let result = {};
    for(let i = 0; i < input.length; i+=2){
        result[input[i]] = Number(input[i+1]);
    }
    return result;
}

let calorie2 = (input) => input.reduce((acc, c, i, a) => { if(i % 2 == 0) { acc[c] = Number(a[i+1]) } return acc}, {})
console.log(calorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
console.log(calorie2(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
