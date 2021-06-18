function solve(input) {
    let arr = input.split(' ');

    let occurrences = new Map();

    for (let word of arr) {
        word = word.toLowerCase();
        if (!occurrences.has(word)) {
            occurrences.set(word, 0);
        }
        let existing = occurrences.get(word);
        occurrences.set(word, existing + 1)
    }
    
    let keys = Array.from(occurrences.keys())
    .filter(x => occurrences.get(x) % 2 !== 0);

    console.log(keys.join(' '));
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')


//  В ЗАДАЧАТА СЕ ИЗПОЛЗВА Map(), а не Object, защото в Мап() 
// елементите се запазват в редът във който сме ги въвели, а 
// при обекта клучовете които са числа се преместват най-отгоре!!!