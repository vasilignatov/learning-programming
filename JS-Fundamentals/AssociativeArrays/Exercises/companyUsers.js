function solve(input) {
    let list = {};
    for (let line of input){
        let [company, id] = line.split(' -> ');
        
        if (!list.hasOwnProperty(company)){
            list[company] = [];
            
        }
        if(!list[company].includes(id)){
        list[company].push(id);
        }
    }
    Object.keys(list)                   // [softuni, HP, microsoft]
    .sort((a, b) => a.localeCompare(b))
    .forEach(company => {
        console.log(company);
        list[company].forEach(id => console.log(`-- ${id}`))
    });
}

solve(
    [
        'SoftUni -> AA12345',
        'SoftUni -> CC12344',
        'Lenovo -> XX23456',
        'SoftUni -> AA12345',
        'Movement -> DD11111'
        ]
        
    )