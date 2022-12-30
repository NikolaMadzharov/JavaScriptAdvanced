function solve(input){

    let newArr = [];

    for (const element of input) {
        if (element >= 0){
            newArr.push(element)
        }else{
            newArr.unshift(element)
        }
    }

   newArr.forEach(x => console.log(x));
}
solve([7, -2, 8, 9])