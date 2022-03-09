// function ticketsManager(data, str: string) {
//     return data
//         .map(x => x.split('|'))
//         .map(x => new Ticket(x[0], x[1], x[2]))
//         .sort((a, b) => a[str].localeCompare(b[str]));
// }
class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    static ticketsManager(data, str) {
        return data
            .map(x => x.split('|'))
            .map(x => new Ticket(x[0], x[1], x[2]))
            .sort((a, b) => a[str].localeCompare(b[str]));
    }
}
console.log(Ticket.ticketsManager([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination'));
