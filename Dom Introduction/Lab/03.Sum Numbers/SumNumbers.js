function calc() {
    let firstNumber = document.getElementById(`num1`);

    let secondNumber = document.getElementById(`num2`);

    let sumElement =  document.getElementById(`sum`)

    let sum = Number(firstNumber.value) + Number(secondNumber.value);

    sumElement.value = sum;

}
