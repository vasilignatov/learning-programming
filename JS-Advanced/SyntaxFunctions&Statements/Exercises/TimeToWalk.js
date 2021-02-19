function solve(stepsToSchool, stepLength, speed) {

    const dist = Math.round(stepsToSchool * stepLength);
    const addedTime = Math.floor(dist / 500) * 60;
    const fullTime = Math.round((dist / (speed / 3.6) + addedTime));

    let hours = Math.floor(fullTime / 3600);
    let mins = Math.trunc(fullTime % 3600 / 60);
    let sec = fullTime % 60;
   
    let hh =  hours % 10 < 1 ? `0${hours}` : hours;
    let mm = mins % 10 < 1 ? `0${mins}` : mins;
    let ss = sec % 10 < 1 ? `0${sec}` : sec;

    return `${hh}:${mm}:${ss}`;
}
console.log(solve(4000, 0.60, 5));
console.log(solve(2564, 0.70, 5.5));