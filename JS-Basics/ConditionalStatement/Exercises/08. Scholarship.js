function scholarship(income, averageEstimates, minSalary) {
    income = Number(income);
    averageEstimates = Number(averageEstimates);
    minSalary = Number(minSalary); ``

    let socialScholarship = Math.floor(0.35 * minSalary);
    let excellentScholarship = Math.floor(averageEstimates * 25);


    if ((income < minSalary) && (averageEstimates > 4.5)) { // Проверка дали може да взема соц. стипендия
        if (averageEstimates >= 5.5) {                       // Проверка дали може да взема отлична стипендия
            if (socialScholarship > excellentScholarship) { // Ако ученикът има право да получава социална стипендия и тя е по-висока от стипендията за отличен успех:

                console.log(`You get a Social scholarship ${socialScholarship} BGN`);

            } else if (socialScholarship <= excellentScholarship) { // Ако ученикът има право да получава стипендия за отличен успех и тя е по-висока или равна по стойност на социалната стипендия за него:
                console.log(`You get a scholarship for excellent results ${excellentScholarship} BGN`);
            }

        } else if (averageEstimates < 5.5) {
            console.log(`You get a Social scholarship ${socialScholarship} BGN`);
        }

    } else if (averageEstimates >= 5.5) {
        console.log(`You get a scholarship for excellent results ${excellentScholarship} BGN`);
    } else {
        console.log(`You cannot get a scholarship!`);
    }
}
scholarship('470.00', '5.50', '450.00');