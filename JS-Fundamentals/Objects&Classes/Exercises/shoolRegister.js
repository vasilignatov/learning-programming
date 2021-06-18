function schoolRegister(input) {
    let list = [];
    input.forEach(student => {
        let [StudentName, n, Grade, avg] = student.split(': ')
        let [name, gr] = n.split(', ');
        let [grade, guarnted] = Grade.split(', ')
        avg = Number(avg);
        if (avg > 3) {
            grade = Number(++grade);
            let current = {
                name,
                grade,
                average: avg
            }
            list.push(current);
        }
    });
    list.sort((a, b) => a.grade - b.grade);
    for (let curGrade = 1; curGrade <= 12; curGrade++) {
        let allNames = [];
        let avgScore = [];
        list.forEach(stud => {
            if (stud.grade == curGrade) {
                allNames.push(stud.name);
                avgScore.push(stud.average);
            }
        });
        if (allNames.length) {
            let sumAvg = (avgScore.reduce((a, b) => a + b, 0)) / avgScore.length;
            console.log(`${curGrade} Grade`);
            console.log(`List of students: ${allNames.join(', ')}`);
            console.log(`Average annual grade from last year: ${sumAvg.toFixed(2)}`);
            console.log(``);
        }   
    }
}
schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]
)
