function solve(arr, start, end) {

    let indexStart = arr.indexOf(start);
    let indexEnd = arr.indexOf(end) +1;

    return arr.slice(indexStart, indexEnd)


}
// console.log(solve([
//     'Apple Crisp',
//     'Mississippi Mud Pie',
//     'Pot Pie',
//     'Steak and Cheese Pie',
//     'Butter Chicken Pie',
//     'Smoked Fish Pie'],
//     'Pot Pie',
//     'Smoked Fish Pie'
// ));
console.log(solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));