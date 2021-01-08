function time(firstTime, secondTime, thirdTime) {
    firstTime = Number(firstTime);
    secondTime = Number(secondTime);
    thirdTime = Number(thirdTime);

    let totalTime = firstTime + secondTime + thirdTime;

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);

    } else {
        console.log(`${minutes}:${seconds}`)
    }
}