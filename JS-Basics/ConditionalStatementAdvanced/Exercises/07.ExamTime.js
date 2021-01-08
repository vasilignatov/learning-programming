function time(examHours, examMins, arrivalHours, arrivalMins) {
    examHours = Number(examHours);
    examMins = Number(examMins);
    arrivalHours = Number(arrivalHours);
    arrivalMins = Number(arrivalMins);

    let totalExamMins = examHours * 60 + examMins;
    let totalArrivalMins = arrivalHours * 60 + arrivalMins;

    let time = totalExamMins - totalArrivalMins;


    if (time < 0) {
        console.log('Late');

        time = Math.abs(time)

        if (time < 60) {
            console.log(`${time} minutes after the start`);
        } else {
            let mins = time % 60;
            let hours = Math.floor(time / 60);  
            if (mins > 10){
                console.log(`${hours}:${mins} hours after the start`);
            }else {
                console.log(`${hours}:0${mins} hours after the start`);
            }
        }
    } else if (time <= 30) {
        console.log('On time');
        if (time > 0){
            console.log(`${time} minutes before the start`);
        }
    } else {
        console.log('Early');

        if (time < 60){
             console.log(`${time} minutes before the start`);
        }else {
            let hours = Math.floor(time / 60);
            let mins = time % 60;
            
            if (mins < 10){
                console.log(`${hours}:0${mins} hours before the start`);
            }else{
                console.log(`${hours}:${mins} hours before the start`);
            }
        }
    }

} time("11",
"30",
"12",
"29")









 