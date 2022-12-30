function solve(input){
    let evenIndex = [];

    for (let i = 0; i < input.length; i++) {

        if (i % 2 === 0){
            evenIndex.push(input[i]);
        }
    }

    return evenIndex.join(` `);
}
console.log(solve(['20', '30', '40', '50', '60']));
console.log(solve(['5', '10']));
