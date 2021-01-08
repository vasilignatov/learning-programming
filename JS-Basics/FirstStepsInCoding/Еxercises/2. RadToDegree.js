function converter(degree) {
    degree = Number(degree)
    let radians = degree * 180 / Math.PI;
    console.log(radians.toFixed(0));
}

converter("3.1416");