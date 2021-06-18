function convertingToObj(str){
    let result = JSON.parse(str);
    for(let [key, value] of Object.entries(result) ){
        console.log(`${key}: ${value}`);
    }  
}
convertingToObj('{"name": "George", "age": 40, "town": "Sofia"}')