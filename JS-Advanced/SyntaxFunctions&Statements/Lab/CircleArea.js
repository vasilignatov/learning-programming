function circleArea(arg){
    let typeOfArg = typeof arg;
    if (typeOfArg == 'number'){
        console.log(area(arg));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfArg}.`);
    } 

    function area(arg){
        let area = Math.PI * Math.pow(arg, 2);
        return area.toFixed(2);
    }
}
circleArea(5)
circleArea('name')