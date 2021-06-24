// <destinationName>|<price>|<status>

function solve(arr, type) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    const sortingFuncs = {
        'destination': (a, b) => a.destination.localeCompare(b.destination),
        'status': (a, b) => a.status.localeCompare(b.status),
        'price': (a, b) => a.price - b.price
    }

    return arr
        .map(x => x.split('|'))
        .map(x => new Ticket(x[0], x[1], x[2]))
        .sort(sortingFuncs[type]);
}




console.log(solve([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));