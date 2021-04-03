function solve() {
    function canCast(state) {
        return {
            cast: (spell) => {
                console.log(`${state.name} cast ${spell}`);
                state.mana--;
            }
        }
    }

    function canFight(state) {
        return {
            fight: () => {
                console.log(`${state.name} slashes at the foe!`);
                state.stamnia--;
            }
        }
    }

    function fighter(name) {
        let state = {
            name,
            health: 100,
            stamnia: 100,
        }
        return Object.assign(state, canFight(state));
    }

    function mage(name) {
        state = {
            name,
            health: 100,
            mana: 100,
        }
        return Object.assign(state, canCast(state));
    }

    return {
        mage,
        fighter
    };
}

let create = solve();
console.log(create);

const scorcher = create.mage("Scorcher");
console.log(scorcher);

scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);
