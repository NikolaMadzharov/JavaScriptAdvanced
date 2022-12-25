function solve(num1, num2){
    let num1Parsed = Number(num1);
    let num2Parsed = Number(num2)
    let sum = 0;

    for (let i = num1Parsed; i <= num2Parsed; i++) {
        sum += i;


    }
    return sum

}
  let result = solve(`1`, '5');
console.log(result)