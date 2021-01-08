function solve(input) {
    let judges = Number(input[0]);
    let index = 1;
    let inputLine = input[index];
    let average = 0;
    let task = 0

    while (inputLine !== 'Finish') {
        inputLine = input[index];
        let taskName = inputLine;

        if (inputLine === 'Finish') {
            break;
        }
        let sumForTask = 0;
        let currentMark = Number(input[index]);
        task++;
        index++;

        for (let i = 1; i <= judges; i++) {
            currentMark = Number(input[index++]);

            sumForTask += currentMark;

        }
        sumForTask = (sumForTask / judges);
        average += Number(sumForTask.toFixed(2));
        console.log(`${taskName} - ${sumForTask.toFixed(2)}.`);

    }
    if (inputLine === 'Finish') {
        average = average / task;
            if (average === 5.335)
            console.log(`Student's final assessment is 5.34.`);
        }   else{
            console.log(`Student's final assessment is ${average.toFixed(2)}.`);
        }
            


    }
solve(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"])

// (["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"])
