function solve(input) {
    let names = input.shift().split(', ');
    let competitors = {};
    names.forEach(name => competitors[name] = 0);
    for (let line of input) {
        let regexName = /[A-Za-z]/g;
        let match = line.match(regexName).join('');
        if (competitors.hasOwnProperty(match)) {
            let regexDist = /[0-9]/g;
            let dist = line
                .match(regexDist)
                .map(Number)
                .reduce((a, b) => a + b, 0);
            competitors[match] += dist;
        }
    }
    let sorted = Object.keys(competitors).sort((a, b) => competitors[b] - competitors[a]);
    console.log(`1st place: ${sorted[0]}\n2nd place: ${sorted[1]}\n3rd place: ${sorted[2]}`);
}
solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])