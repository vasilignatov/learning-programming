function solve(input) {
    let companies = Number(input[0]);
    index = 1;
    let command = input[index];
    let mostFlights = '';
    let mostPassangers = 0;

    for(let i = 1; i <= companies; i++){
        command = input[index];
        let currentName = input[index++];
        let sum = 0
        let days = 0

        while(command !== 'Finish'){
            let currentPassagers = Number(input[index]);
            sum += currentPassagers;
            index++;
            days++;
            command = input[index];
        }
        let averageCurrent = Math.floor(sum / days);
        console.log(`${currentName}: ${averageCurrent} passengers.`);

        if (mostPassangers < averageCurrent){
            mostPassangers = averageCurrent;
            mostFlights = currentName;
        }
        index++;
    }
    console.log(`${mostFlights} has most passengers per flight: ${mostPassangers}`);
}
solve(['3',
   'WizzAir',
   '180',
   '230',
   '100',
   'Finish',
   'BulgariaAir',
   '50',
   '60',
   '90',
   'Finish',
   'Lufthansa',
   '260',
   '320',
   'Finish'])
    
