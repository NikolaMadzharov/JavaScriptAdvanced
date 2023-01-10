
function deleteByEmail() {
    let emailInputElemet = document.querySelector('input[name="email"]');
    let userElements = document.querySelectorAll('tr td:nth-of-type(2)');

    let userElementsToArr = Array.from(userElements);

    let currentEmail = userElementsToArr.find(x => x.textContent == emailInputElemet.value);

    currentEmail.parentElement.remove();
}
