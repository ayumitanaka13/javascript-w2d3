const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(rollDice());


const greet = (name) => {
    return `Hi ${name}!`;
}
console.log(greet("Ayumi"));


const add = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}
console.log(add(22, 11));
