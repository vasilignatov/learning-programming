function solve(input) {

    let actions = {
        Flip(rowKey, mode, start, end) {
            [start, end] = [Number(start), Number(end)]
            let first = rowKey.substring(0, start);
            let second = rowKey.substring(start, end);
            let third = rowKey.substring(end);

            if (mode == 'Upper') {
                second = second.toLocaleUpperCase()
            } else {
                second = second.toLocaleLowerCase();
            }
            let result = first + second + third;

            console.log(result);

            return result;
        },

        Slice(rowKey, start, end) {
            [start, end] = [Number(start), Number(end)]; 
            let first = rowKey.substring(0, start);
            let second = rowKey.substring(start, end);
            let third = rowKey.substring(end);

            let result = first + third;
            console.log(result);
            return result;
        },

        Contains(rawKey, pattern) {
            if (rawKey.includes(pattern)) {
                console.log(`${rawKey} contains ${pattern}`);
            } else {
                console.log(`Substring not found!`);
            }
            return rawKey;
        }

    }

    let rawKey = input.shift();
    let line;

    while ((line = input.shift()) != 'Generate') {

        
        let [actionName, ...params] = line.split('>>>');

        rawKey = actions[actionName](rawKey, ...params);
    }
    console.log(`Your activation key is: ` + rawKey);
}
solve([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
])

solve([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
  ])