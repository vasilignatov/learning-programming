function speed(arg1) {
    arg1 = Number(arg1);

    if (arg1 <= 10) {
        console.log("slow");

    } else if (arg1 > 1000) {
        console.log("extremely fast");

    } else if (150 < arg1) {
        console.log("ultra fast");

    } else if (50 < arg1) {
        console.log("fast");

    } else if (10 < arg1) {
        console.log("average");

    }
}