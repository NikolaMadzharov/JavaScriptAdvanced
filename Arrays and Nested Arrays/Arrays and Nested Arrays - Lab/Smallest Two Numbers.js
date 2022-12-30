function solve(input){

    let newArr = input.sort((a,b) => b - a).slice(0,2);
    return newArr;
}

console.log(solve([30, 15, 50, 5]))