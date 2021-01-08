function areaOfFigures(arg1, arg2, arg3) {
    let type = arg1;
    // square, rectangle, circle или triangle
    if (type == "square") {
        let sideA = Number(arg2);
        let area = sideA * sideA
        console.log(area.toFixed(3));

    } else if (type == "rectangle") {
        let sideA = Number(arg2);
        let sideB = Number(arg3);
        let area = sideA * sideB
        console.log(area.toFixed(3));

    } else if (type == "circle") {
        let radius = Number(arg2);
        let area = Math.PI * radius * radius
        console.log(area.toFixed(3));

    }
    else if (type == "triangle") {
        let length = Number(arg2);
        let height = Number(arg3);
        let area = 0.5 * length * height
        console.log(area.toFixed(3));
    }
    else console.log("Wrong name of figure");
    
}
areaOfFigures("circlee", "7", "2.5");
