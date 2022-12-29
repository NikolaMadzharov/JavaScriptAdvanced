function solve(input){

    let inputAsString =  input.toString();
    let isSame = true;

    let sum = 0;
    let firstNumAsString = inputAsString[0];

    for (let i = 0; i < inputAsString.length; i++) {
        let digit = inputAsString[i];
        sum += Number(digit);

        if (firstNumAsString !== inputAsString[i])
        {
            isSame = false;
        }

    }

    console.log(isSame);
    console.log(sum);

}

solve(2222222)
solve(1234)