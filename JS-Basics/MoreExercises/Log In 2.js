function logIn(arr) {
    let username = arr.shift();
    let password = username.split('').reverse().join('')

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === password) {
            console.log(`User ${username} logged in.`);
        } else {
            if (i == 3) {
                console.log(`User ${username} blocked!`);
                break;
            } else {
                console.log(`Incorrect password. Try again.`);
            }
        } 
    }

}
logIn(['sunny','rainy','cloudy','sunny','not sunny'])

