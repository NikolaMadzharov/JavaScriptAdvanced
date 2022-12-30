function solve(inputAsString){

    let firstElement = Number(inputAsString[0]);
    let lastElement = Number(inputAsString[inputAsString.length - 1]);

    let sum = firstElement + lastElement;

    return sum;
}

console.log(solve(['20', '30', '40']))