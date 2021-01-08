function solve(input){

    function solve(input) {
        let index = 0;
        let inputLine = input[index];
        let  = 0;
     
     
        let studentTicket = 0;
        let standartTicket = 0;
        let kidTicket = 0;
     
     
        while (inputLine !== 'Finish') {
           inputLine = input[index++];
           let ticketsForMovie = Number(input[index]);
           let ticketsForMovieSold = 0;
           let movieName = inputLine;
           let currentTicket = '';
           index++;
     
           while (inputLine !== 'End') {
              inputLine = input[index++];
              currentTicket = inputLine;
     
              if (inputLine === 'End' || ticketsForMovieSold === ticketsForMovie) {
                 console.log(`${movieName} - ${(ticketsForMovieSold / ticketsForMovie * 100).toFixed(2)}% full.`);
                 break;
              }
     
              if (currentTicket === 'student') {
                 studentTicket++;
              } else if (currentTicket === 'standard') {
                 standartTicket++;
              } else {
                 kidTicket++;
              }
              ticketsForMovieSold++;
           }
        }
        let totalTicket = kidTicket + standartTicket + studentTicket;
        console.log(`Total tickets: ${totalTicket}`);
        console.log(`${(studentTicket / totalTicket * 100).toFixed(2)}% student tickets.`);
        console.log(`${(standartTicket / totalTicket * 100).toFixed(2)}% standard tickets.`);
        console.log(`${(kidTicket / totalTicket * 100).toFixed(2)}% kids tickets.`);
     }


}
solve(["Taxi",
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
"Finish"]);
