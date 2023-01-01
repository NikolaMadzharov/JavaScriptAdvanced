function solve(array){

    let newArr = [];

    for (let i = 0; i < array.length; i++) {

        let currentCommand = array[i];

        if (currentCommand === `add`){
            newArr.push(i+1);
        }else{
            newArr.pop();
        }
    }

    return newArr;
}

console.log(solve(['add',
    'add',
    'remove',
    'add',
    'add']
))