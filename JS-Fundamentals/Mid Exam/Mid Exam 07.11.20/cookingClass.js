function cookingClass(budget, students, flourPrice, eggPrice, apronPrice) {


    let freePackeges = Math.floor(students / 5);
    let sum = apronPrice * Math.ceil(students * 1.2) + eggPrice * 10 * students + flourPrice * (students - freePackeges);
    if (budget >= sum){
        console.log(`Items purchased for ${sum.toFixed(2)}$.`);
    }else {
        console.log(`${(sum - budget).toFixed(2)}$ more needed.`);
    }
}
cookingClass(100,
    25,
    4.0,
    1.0,
    6.0);