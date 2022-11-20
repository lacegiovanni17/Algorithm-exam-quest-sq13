// Challenge: Create a function that give you the number of bottles of milk you ordered
// if each bottle cost is $1.5

function getMilk(money) {
    let numberOfBottles = Math.floor(money / 1.5); 
    console.log("buy " + numberOfBottles + " bottles of Milk"); 
    return money % 1.5; //Remainder of this division.
}

let change = getMilk(4); 
console.log(change); 