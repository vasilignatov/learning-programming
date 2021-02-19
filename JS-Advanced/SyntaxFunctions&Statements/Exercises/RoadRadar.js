function solve(speed, area){
    let allowedSpeed = 0;
    let status = '';
    switch (area){
        case 'residential': allowedSpeed = 20; break;
        case 'city': allowedSpeed = 50; break;
        case 'interstate': allowedSpeed = 90; break;
        case 'motorway': allowedSpeed = 130; break;
    }
    let differece = speed - allowedSpeed

    if (differece <= 20) {
        status = 'speeding';
    } else if (differece <= 40){
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }
    
    if(speed > allowedSpeed){
        return `The speed is ${differece} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`;
    } else {
        return `Driving ${speed} km/h in a ${allowedSpeed} zone`;
    }

}
console.log(solve(40, 'city'));
console.log(solve(21, 'residential'));
console.log(solve(120, 'interstate'));
console.log(solve(200, 'motorway'));