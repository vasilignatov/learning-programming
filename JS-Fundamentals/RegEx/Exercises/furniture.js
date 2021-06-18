function solve(input) {

    let result = `Bought furniture:\n`;
    let sum = 0;

    for (const line of input) {
        let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(\.\d{2})?)!(?<qty>\d+)/g;
        let match = pattern.exec(line);
        if (match) {
            result += match.groups.name + '\n';
            sum += Number(match.groups.price) * Number(match.groups.qty);
        }
    }
    result += `Total money spend: ${sum.toFixed(2)}`;
    console.log(result);
}
solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])
