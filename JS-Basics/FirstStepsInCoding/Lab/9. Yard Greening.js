function yardGreening(sqrMetters) {
    let fprice = sqrMetters * 7.61;
    let discount = fprice * 0.18;
    let Finalprice = fprice - discount;
    console.log(`The final price is: ${Finalprice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}