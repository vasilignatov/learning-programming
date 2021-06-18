function sortArr(arr){
    // създаваме нов масив - празен
    // обхождаме дадения масив 
    // вземаме най-големият елемент и го бутаме в новия масив
    // печатаме сортираният масив
    let sortArr = [];
    let biggerNum = Number.MAX_SAFE_INTEGER;
    function isBiger(arr){
        for (let i = 0; i < array.length; i++) {
            
            if (arr[i] < biggerNum){
                biggerNum = arr[i]
                arr.shift(i)    
            } else {
                break;
            }
        }
    }
    isBiger([5, 10, 1, 6, 4, 9])
// sortArr([5, 10, 1, 6, 4, 9])