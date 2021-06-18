function convertToJson(first, last, hair){
    let obj = {};
    obj.name = first;
    obj.lastName = last;
    obj.hairColor = hair;

    return  JSON.stringify(obj);    
}


function convertToJson(name, lastName, hairColor){
    let obj = {
        name,
        lastName,
        hairColor
    }
    return  JSON.stringify(obj);    
}

console.log(convertToJson(
'George',
'Jones',
'Brown'
));