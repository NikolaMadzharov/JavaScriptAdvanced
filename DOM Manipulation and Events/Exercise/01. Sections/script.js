function create(words) {
 let content = document.getElementById(`content`);

 for (const word of words) {
   
   let div = document.createElement('div');
   let paragraph = document.createElement('p');
   paragraph.textContent = word;
   paragraph.style.display = 'none';
   div.appendChild(paragraph)
   content.appendChild(div);

   div.addEventListener('click', (e) =>{
    e.currentTarget.children[0].style.display ='block';
   })

 }
}
