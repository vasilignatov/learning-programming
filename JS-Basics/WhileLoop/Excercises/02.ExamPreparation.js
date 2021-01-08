function solve(input) {

    let poorCounter = 0;
    let poorTarget = Number(input[0]);
    let index = 1;
    let average = 0;
    let taskName = '';
    let taskCounter = 0;
    let currentScore = 0;
    let command = input[index];
    let needABreak = false;


    while (command !== 'Enough') {
        command = input[index];

        if (command === 'Enough') {
            needABreak = true;
            break;
        }

        index++;
        currentScore = Number(input[index]);

        if (currentScore <= 4) {
            poorCounter++;
            if (poorCounter >= poorTarget) {
                break;
            }
        }

        taskName = command;
        average += currentScore;
        taskCounter++;
        index++;
    }
    average = (average / taskCounter).toFixed(2);

    if (needABreak) {
        console.log(`Average score: ${average}`);
        console.log(`Number of problems: ${taskCounter}`);
        console.log(`Last problem: ${taskName}`);
    } else {
        console.log(`You need a break, ${poorCounter} poor grades.`);

    }


}
solve(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "3",
    "Bus",
    "6",
    "Enough"])

