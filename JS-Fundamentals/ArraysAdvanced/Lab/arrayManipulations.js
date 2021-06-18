function arrManipulations(commands) {
    let arr = commands.shift()
        .split(' ')
        .map(Number);

    for (let i = 1; i < arr.length; i++) {
        let [command, firstNum, secondNum] = commands[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        switch (command) {
            case 'Add':
                add(firstNum);
                break;
            case 'Remove':
                remove(firstNum);
                break;
            case 'RemoveAr':
                removeAt(firstNum);
                break;
            case 'Insert':
                insert(firstNum, secondNum);
                break;
        }
    }

    function add(el) {
        arr.push(el);
    }

    function remove(el) {
        arr = arr.filter(el => el !== arr[i]); //  <-  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }

    function removeAt(index) {
        arr.splice(index, 1)
    }

    function insert(num, index) {
        arr.splice(index, 0, num)
    }



    console.log(arr.join(' '))


}
arrManipulations(['4 19 2 53 6 4',                                      // my array
                          'Add 3',                                      // all str functions to the end of command array
                       'Remove 2',
                     'RemoveAt 1',
                     'Insert 8 3'])