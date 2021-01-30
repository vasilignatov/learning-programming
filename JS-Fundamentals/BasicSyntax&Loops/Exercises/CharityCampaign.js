function charity(campaign, confectioners, cakes, waffles, pancake) {
    campaign = Number(campaign);
    confectioners = Number(confectioners);
    cakes = Number(cakes);
    pancake = Number(pancake);
    waffles = Number(waffles);

    let cakesPD = Number(45 * cakes);
    let wafflesPD = Number(5.80 * waffles);
    let pancakePD = Number(3.20 * pancake);

    let oneConfetioner = cakesPD + wafflesPD + pancakePD;
    let allConfetioner = oneConfetioner * confectioners;

    let price = campaign * allConfetioner;

    let razhodi = price * 1 / 8;

    console.log(price - razhodi);

}