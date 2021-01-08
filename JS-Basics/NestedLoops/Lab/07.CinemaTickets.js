function cinema(input) {

    let studentTickets = 0;
    let standartTickets = 0;
    let kidsTickets = 0;
    let index = 0;

    let inputLine = input[index++];

    while (inputLine !== 'Finish') {
        let movieName = inputLine;
        let ticketsCount = Number(input[index]);
        let boughtTickets = 0;

        let ticketType = input[index++];
        while (ticketType !== 'End') {
            if (ticketType === 'standard') {
                standartTickets++;
            } else if (ticketType === 'student') {
                studentTickets++;
            } else {
                kidsTickets++;
            }
            boughtTickets++;
            if (boughtTickets === ticketsCount) {
                break;
            }

            ticketType = input[index++];

        }
        let precentage = (boughtTickets / ticketsCount) * 100;
        console.log(`${movieName} - ${precentage.toFixed(2)}% full.`);

        inputLine = input[index++]
    }

    let totalTickets = studentTickets + standartTickets + kidsTickets;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(studentTickets / totalTickets * 100).toFixed(2)} student tickets.`);
    console.log(`${(standartTickets / totalTickets * 100).toFixed(2)} student tickets.`);
    console.log(`${(kidsTickets / totalTickets * 100).toFixed(2)} student tickets.`);
}
cinema(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])
