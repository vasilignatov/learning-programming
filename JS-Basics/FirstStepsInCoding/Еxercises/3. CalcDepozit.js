function calcDep(amount, term, percent) {
    amount = Number(amount);
    term = Number(term);
    percent = Number(percent);

    // 1. изчисляваме натрупаната лихва: 200 * 5.7% = 11.4лв.
    let natrupanaLihva = amount * percent / 100;

    // 2. изчисляваме лихвата за 1 месец: 11.4лв./12 месеца = 0.95лв
    let lihva = natrupanaLihva / 12;

    // 3. общата сума е 200лв депозит + (3 (срок на депозита) * 0.95 лв)
    let result = amount + (term * lihva);

    console.log(result);

}

calcDep("200", "3", "5.7");