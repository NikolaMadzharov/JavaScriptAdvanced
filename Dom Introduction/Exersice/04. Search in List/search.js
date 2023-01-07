function search() {
  let listElements = document.querySelectorAll(`ul#towns li`);
  let searchText = document.getElementById(`searchText`).value;
  let result = document.getElementById(`result`);
  let matches = 0;

for (const el of listElements) {
   el.style.fontWeight = `normal`;
   el.style.textDecoration = '';
}

  for (let el of listElements) {
    let text = el.textContent;
   
    if(text.match(searchText)){
       matches++;
      el.style.fontWeight = 'bold';
      el.style.textDecoration = `underline`;

    }
   }

   result.textContent = ` ${matches}Matches found`
}