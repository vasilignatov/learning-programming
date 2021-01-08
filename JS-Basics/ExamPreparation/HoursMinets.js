function time(hours, min) {
    hours = Number(hours);
    min = Number(min);
    min += 15;
    hours =hours + Math.floor(min / 60);
    hours = hours % 24;
    
    min = min % 60;

    if (min < 10) {
        console.log(`${hours}:0${min}`);
    } else if (min >= 10) {
        console.log(`${hours}:${min}`);
    }
}
time("23", "59");