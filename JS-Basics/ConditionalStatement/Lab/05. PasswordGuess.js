function guessPass (input){
    input = String(input);

    if (input === "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
        
    }else if (input !== "s3cr3t!P@ssw0rd"){
        console.log("Wrong password!");
    }

}