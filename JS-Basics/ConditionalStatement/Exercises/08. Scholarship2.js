function scholarship(income, averageEstimates, minSalary) {
    income = Number(income);
    averageEstimates = Number(averageEstimates);
    minSalary = Number(minSalary);

    let socialScholarship = 0.35 * minSalary;
    let excellentScholarship = averageEstimates * 25;  
    
    if ((income < minSalary) && (averageEstimates > 4.5)) { 
        if (averageEstimates >= 5.5) {                       
            if (socialScholarship > excellentScholarship) { 
                console.log(`You get a Social scholarship ${socialScholarship} BGN`);
            } else if (socialScholarship <= excellentScholarship) {
                console.log(`You get a scholarship for excellent results ${excellentScholarship} BGN`);
            }
        }
    }else {
        console.log(`You cannot get a scholarship!`);
    }
}
scholarship("300.00", "5.65", "420.00");

