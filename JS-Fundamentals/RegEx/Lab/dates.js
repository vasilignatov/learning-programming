function dates([str]){

    let pattern = /\b(?<day>\d{2})([\/.-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

    let validDate = pattern.exec(str);
    
    while(validDate !== null){
        let day = validDate.groups.day;
        let month = validDate.groups.month;
        let year = validDate.groups.year;
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        validDate = pattern.exec(str);
    }
}
dates(['13/Jul/1928, 10-Nov-1934, 25.Dec.1937, 01/Jan-1951, 23/sept/1973, 1/Feb/2016'])