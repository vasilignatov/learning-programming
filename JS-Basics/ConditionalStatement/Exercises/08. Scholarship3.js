function scholarship(income, averageEstimates, minSalary) {
    income = Number(income);
    averageEstimates = Number(averageEstimates);
    minSalary = Number(minSalary);

    let excelent = 0;
    let social = 0;

    if (income < minSalary && averageEstimates >= 4.5) {
        social = 0.35 * minSalary;
    }
    if (averageEstimates >= 5.5) {
        excelent = averageEstimates * 25;
    }

    if (excelent === 0 && social === 0) {
        console.log('You cannot get a scholarship!');
    } else if (social > excelent) {
        console.log(`You get a Social scholarship ${Math.floor(social)} BGN`);
    } else {
        console.log(`You get a scholarship for excellent results ${Math.floor(excelent)} BGN`);
    }
}
scholarship("480.00",
    "4.60",
    "450.00")
