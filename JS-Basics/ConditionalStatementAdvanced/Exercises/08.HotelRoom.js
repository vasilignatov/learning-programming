function hotel(month, days) {
    days = Number(days);
    let studio = 0;
    let apartment = 0;
   

    switch (month) {
        case 'May':
        case 'October':
            studio = 50;
            apartment = 65;
                if (days > 14 ) {
                    studio = studio * 0.7;
                    apartment = apartment * 0.9;
                } else if (days > 7) {
                    studio = studio * 0.95;
                }
            break;
        case 'June':
        case 'September':
            studio = 75.20;
            apartment = 68.70;
            if (days > 14) {
                studio = studio * 0.8;
                apartment = apartment * 0.9;
            }
            break;
        case 'July':
        case 'August':
            studio = 76;
            apartment = 77;
            if (days > 14) {
                apartment = apartment * 0.9;
            break;
    }
}
    console.log(`Apartment: ${(apartment * days).toFixed(2)} lv.`);
    console.log(`Studio: ${(studio * days).toFixed(2)} lv.`);
}
hotel("August",
"20")


