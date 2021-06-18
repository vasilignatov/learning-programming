function inventory(arr) {
    let result = [];
    for (const line of arr) {
        let [name, level, items] = line.split(' / ');
        items = items.split(', ').sort().join(', ')
        console.log(items);
        
        let heroObj = {
            Hero: name,
            level,
            items
        }
        result.push(heroObj);
    }
    result
    .sort((a, b) => a.level - b.level)
    .forEach(h => {
        console.log(`Hero: ${h.Hero}`);
        console.log(`level => ${h.level}`);
        console.log(`items => ${h.items}`);
    })
}
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]
)