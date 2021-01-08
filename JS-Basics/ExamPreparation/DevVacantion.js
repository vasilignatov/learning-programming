function vacantion(budget, season) {
    budget = Number(budget);
    let destination = 0;
    let place = 0;
    let sum = 0;
    if (budget <= 100) {
        switch (season) {
            case 'summer':
                destination = 'Bulgaria';
                place = 'Camp'
                sum = budget * 0.3;
                break;
            case 'winter':
                destination = 'Bulgaria';
                place = 'Hotel'
                sum = budget * 0.7;
                break;
        }
    } else if (budget <= 1000) {
        switch (season) {
            case 'summer':
                destination = 'Balkans';
                place = 'Camp'
                sum = budget * 0.4;
                break;
            case 'winter':
                destination = 'Balkans';
                place = 'Hotel'
                sum = budget * 0.8;
                break;
        }
    } else if (budget > 1000) {
        switch (season) {
            case 'summer':
                destination = 'Europe';
                place = 'Hotel'
                sum = budget * 0.9;
                break;
            case 'winter':
                destination = 'Europe';
                place = 'Hotel'
                sum = budget * 0.9;
                break;
        }
    }
    console.log(`Somewhere in ${destination}` );
    console.log(`${place} - ${(sum).toFixed(2)}`);
}
vacantion('1500', "summer")
