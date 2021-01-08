function cinema(ticket, row, column){
    row = Number(row);
    column = Number(column);
    let price = 0;
    let stances = row * column;

    switch (ticket){
        case 'Premiere':
            price = 12;
            break;
        case 'Normal':
            price = 7.5;
            break;
        case 'Discount':
            price = 5;
            break;
    }
    console.log((stances * price).toFixed(2));
    
}
cinema("Premiere", "10", "12")

    