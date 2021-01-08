function time(time, day) {
    time = Number(time);
    day = String(day);

    if (time >= 10 && time < 18) {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday":
                console.log("open");
                break;
            case "Sunday":
                console.log("closed");
                break;
            default:
                console.log("Error");
                break; 
                
        }
    }else {
        console.log("closed");
    }
}
time("11",
"Sunday")

