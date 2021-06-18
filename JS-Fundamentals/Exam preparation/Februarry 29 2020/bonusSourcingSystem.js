function solve(input) {
    input = input.map(Number)
    let students = input.shift();
    let lecturesCount = input.shift();
    let initialBonus = input.shift();
    let studentsObj = {}
    for (let stud of input) {
        studentsObj[stud] = Math.round(stud / lecturesCount * (5 + initialBonus));
    }
    console.log(`Max Bonus: ${Math.max(...Object.values(studentsObj))}.`);
    console.log(`The student has attended ${Math.max(...Object.keys(studentsObj))} lectures.`);
} 
solve([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]
)

solve([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]
)