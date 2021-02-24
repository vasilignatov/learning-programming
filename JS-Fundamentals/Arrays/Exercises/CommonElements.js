function commonElements(arr1, arr2){        //solving with includes()
    for (let i = 0; i < arr1.length; i++) {
        let current = arr1[i];
        if(arr2.includes(current)){
            console.log(current); 
        }
    }

    for (let el of arr1){                   //solving with for-of
        let isCommon = arr2.includes(el)  
        if (isCommon){  //true
            console.log(el);
        }
    }


    for(const el of arr1){                  // solving with two for loops
        for(const el2 of arr2){
            if (el === el2){
                console.log(el);
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])