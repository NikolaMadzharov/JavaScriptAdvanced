function addItem() {
  let items = document.getElementById(`items`);
  let liElement = document.createElement('li');
  let input = document.getElementById(`newItemText`);
  
 
  
  liElement.textContent = input.value;

   items.appendChild(liElement);

}