function phonde(input){
    let phonebook = {}
    for(let line of input){
        let [name, phone] = line.split(' ');
        phonebook[name] = phone;
    }
    for(let key in phonebook){  // връща ключовете -> Object.keys(phonebook)  ['Tim', 'Peter', 'Bill]
         console.log(`${key} -> ${phonebook[key]}`);
    }
}
phonde(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)

