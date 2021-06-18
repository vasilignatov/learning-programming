function flight(input) {

    let flights = {};
    for (let line of input[0]) {
        let key = line.slice(0, line.indexOf(' '));
        let destination = (line.split(key + ' '))[1];
        flights[key] = {
            Destination: destination,
            Status: 'Ready to fly'
        }
    }

    input[1].forEach(element => {
        let [num, newStatus] = element.split(' ');
        if (flights.hasOwnProperty(num)){
            flights[num].Status = newStatus
        }
    })
    for(let fly in flights){
        if(flights[fly].Status == input[2].toString()){
            console.log(flights[fly]);
        }
    } 
}
flight([[
    'WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],

    ['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],

['Cancelled']
])


/*flight([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],

 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],

 ['Ready to fly']
]
)*/