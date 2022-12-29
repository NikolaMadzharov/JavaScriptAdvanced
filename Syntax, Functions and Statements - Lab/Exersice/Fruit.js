function solve(fruit, grams, pricePerKillo){

    let weightKillo = (grams / 1000).toFixed(2);
    let sum = (weightKillo * pricePerKillo).toFixed(2);

    console.log(`I need $${sum} to buy ${weightKillo} kilograms ${fruit}.`);

}
solve('apple', 1563, 2.35);