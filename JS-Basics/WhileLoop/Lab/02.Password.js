function password(input) {
    let username = input[0];
    let pass = input[1];

    let data = 2;
    let currentPass = input[data];

    while (currentPass !== pass) {
        currentPass = input[data++]
    }
    console.log(`Welcome ${username}!`);

}

password(["Gosho",
"secret",
"secret"])

