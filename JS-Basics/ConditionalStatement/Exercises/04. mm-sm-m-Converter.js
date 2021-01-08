function converter(arg1, arg2, arg3) {
    arg1 = Number(arg1);
    let result = arg1;

    if (arg2 === "mm") {
        if (arg3 === "mm") {
            result = arg1;
        } else if (arg3 === "cm") {
            result = arg1 / 10;
        } else if (arg3 === "m") {
            result = arg1 / 1000;
        }
    } else if (arg2 === "cm") {
        if (arg3 === "mm") {
            result = arg1 * 10;
        } else if (arg3 === "cm") {
            result = arg1;
        } else if (arg3 === "m") {
            result = arg1 / 100;
        }
    } else if (arg2 === "m") {
        if (arg3 === "mm") {
            result = arg1 * 1000;
        } else if (arg3 === "cm") {
            result = arg1 * 100;
        } else if (arg3 === "m") {
            result = arg1;

        }

    }
    console.log(result.toFixed(3));

} 
converter("150", "m", "cm");
