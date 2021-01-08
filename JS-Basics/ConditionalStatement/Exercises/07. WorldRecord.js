function record(recordSec, distance, time1) {
    recordSec = Number(recordSec);
    distance = Number(distance);
    time1 = Number(time1);

    let ivan = distance * time1;
    let delay = 12.5 * Math.floor(distance / 15); 
    let totalTime = ivan + delay;

    if (totalTime < recordSec) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);     
    }else {
        console.log(`No, he failed! He was ${(totalTime - recordSec).toFixed(2)} seconds slower.`);
        
    }
}
record("10464", "1500", "20");
record("55555.67", "3017", "5.03");
