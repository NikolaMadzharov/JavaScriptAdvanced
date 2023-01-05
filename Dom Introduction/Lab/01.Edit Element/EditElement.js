function solve(){

    let element = document.getElementById(`e1`);
    editElement(element, `Hello`, `Ivan` )
}

function editElement(element, match , replacer) {
   
  let pattern = new RegExp(match, 'g');
 element.textContent = element.textContent.replace(pattern, replacer);

}
