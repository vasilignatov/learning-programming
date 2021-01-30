function calcDep(amount, term, percent) {
    amount = Number(amount);
    term = Number(term);
    percent = Number(percent);

    let natrupanaLihva = amount * percent / 100;

    let lihva = natrupanaLihva / 12;

    let result = amount + (term * lihva);

    console.log(result);

}