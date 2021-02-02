function triples(n) {

    let firstLetter = '';
    let secondLetter = '';
    let thirdLetter = '';

    for (let i = 1; i <= n; i++) {
        switch (i) {
            case 1:
                firstLetter = 'a';
                break;
            case 2:
                firstLetter = 'b';
                break;
            case 3:
                firstLetter = 'c';
                break;
            case 4:
                firstLetter = 'd';
                break;
            case 5:
                firstLetter = 'e';
                break;
            case 6:
                firstLetter = 'f';
                break;
        }

        for (let j = 1; j <= n; j++) {
            switch (j) {
                case 1:
                    secondLetter = 'a';
                    break;
                case 2:
                    secondLetter = 'b';
                    break;
                case 3:
                    secondLetter = 'c';
                    break;
                case 4:
                    secondLetter = 'd';
                    break;
                case 5:
                    secondLetter = 'e';
                    break;
                case 6:
                    secondLetter = 'f';
                    break;
            }

            for (let k = 1; k <= n; k++) {
                switch (k) {
                    case 1:
                        thirdLetter = 'a';
                        break;
                    case 2:
                        thirdLetter = 'b';
                        break;
                    case 3:
                        thirdLetter = 'c';
                        break;
                    case 4:
                        thirdLetter = 'd';
                        break;
                    case 5:
                        thirdLetter = 'e';
                        break;
                    case 6:
                        thirdLetter = 'f';
                        break;
                }

                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }

    }
}