function meetings(input) {
    let assocArr = {};
    for(let line of input){
        let [day, name] = line.split(' ');
        if (assocArr.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            assocArr[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for(let line in assocArr){
        console.log(`${line} -> ${assocArr[line]}`);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)