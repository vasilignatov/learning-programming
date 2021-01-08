function solve() {
    let hoursEnd = 23;
    let minutesEnd = 59;
    for (let hours = 0; hours <= hoursEnd; hours++) {
        for (let minutes = 0; minutes <= minutesEnd; minutes++) {
            let output = `${hours}:`

            if (hours < 10) {
                output = `0${hours}:`;
            }

            if (minutes < 10) {
                output += `0${minutes}`;
            } else {
                output += `${minutes}`;
            }
            console.log(output);
            counter++;
        }
    }
}
solve()