function areaOfFigures(arg1, arg2, arg3) {
    let type = String(arg1)
    let result = 0;
    // square, rectangle, circle или triangle
    if (type == "square") {
        let sideA = Number(arg2);
        result = sideA * sideA;

    } else if (type == "rectangle") {
        let sideA = Number(arg2);
        let sideB = Number(arg3);
        result = sideA * sideB

    } else if (type == "circle") {
        let radius = Number(arg2);
        result = Math.PI * radius * radius
        

    }
    else if (type == "triangle") {
        let length = Number(arg2);
        let height = Number(arg3);
        result = 0.5 * length * height
    }
    console.log(result.toFixed(3));
}
areaOfFigures("circle", "7", "2.5");
