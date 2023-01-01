function solve(array){
    let sortedArray = array.sort((a,b) => a.localeCompare(b));

    for (let i = 0; i <sortedArray.length ; i++) {
        let currentName = sortedArray[i];
        console.log(`${i+1}.${currentName}`);
    }
}

solve(["John", "Bob", "Christina", "Ema"])