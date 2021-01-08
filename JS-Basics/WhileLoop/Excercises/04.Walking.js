function solve(input) {
 
    const goal = 10000;
    let currentSteps = 0;
    let goingHomeSteps = 0
    let allSteps = 0;
    let isGoal = false;

    let index = 0;
    let command = input[index];


    while (currentSteps < goal) {
        command = input[index];
        currentSteps = Number(input[index]);

        if (command === 'Going home') {
            index++;
            goingHomeSteps = Number(input[index])
            allSteps += goingHomeSteps;
            break;
        }
        allSteps += currentSteps;
        index++;

        if (input.length === index) {
            break;
        }


    }
    if (allSteps > goal) {
        isGoal = true;

    }

    if (isGoal) {
        console.log(`Goal reached! Good job!`);
        console.log(`${allSteps - goal} steps over the goal!`);
    } else {
        console.log(`${goal - allSteps} more steps to reach goal.`);
    }

}
solve(["1000",
    "1500",
    "2000",
    "6500"])


