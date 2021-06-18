function passValidator(pass) {
    // проверяваме дали дължината е от 6 - 10 знака;
    // проверяваме дали е само от букви и цифри; 
    // проверяваме дали има поне две цифри;
    // принтираме резултата;

    function isValidLength(pass) {
        if (pass.length < 6 || pass.length > 10) {
            return false;
        } else {
            return true;
        }
    }

    function isValidDigitsAndLetters(pass) {
        for (let i = 0; i < pass.length; i++) {
            let code = pass[i].charCodeAt();
            if (code >= 65 && code <= 90 ||
                code >= 97 && code <= 122 ||
                code >= 48 && code <= 57) {
            } else {
                return false;
            }
        }
        return true;
    }

    function isValidTwoDigits(pass) {
        let digitCounter = 0;
        for (let i = 0; i < pass.length; i++) {
            let code = pass[i].charCodeAt();
            if (code >= 48 && code <= 57) {
                digitCounter++;
            }
        }
        return digitCounter >= 2 ? true : false;
    }

    let isValidCounter = 0;

    if (isValidLength(pass)) {
        isValidCounter++;
    } else {
        console.log('Password must be between 6 and 10 characters');
    }
    if (isValidDigitsAndLetters(pass)) {
        isValidCounter++;
    } else {
        console.log('Password must consist only of letters and digits')
    }
    if (isValidTwoDigits(pass)) {
        isValidCounter++;
    } else {
        console.log('Password must have at least 2 digits')
    }

    if (isValidCounter == 3) {
        console.log('Password is valid')
    }
}
passValidator('Pa$s$s');