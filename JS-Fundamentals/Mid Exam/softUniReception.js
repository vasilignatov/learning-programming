function reception(input){
    let [eff1, eff2, eff3, students] = input.map(Number);
    let efficiency = eff1 + eff2 + eff3;
    let hour = 0;
    while( students > 0){
        hour++;
        if (hour % 4 != 0){
            students -= efficiency;
        }
    }
    console.log(`Time needed: ${hour}h.`);
}
reception() 