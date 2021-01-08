function volleyball(year, p, h) {
    p = Number(p);
    h = Number(h);
    let weekends = 48 - h;
    let allGames = 0;
    weekends = weekends * 3 / 4;

    allGames = weekends + (p * 2 / 3);
    allGames = allGames + h;

    if (year === 'leap') {
        allGames = allGames * 1.15;
        console.log(Math.floor(allGames));
    } else if (year === 'normal') {
        console.log(Math.floor(allGames));
    }
}
volleyball("leap",
"2",
"3")

