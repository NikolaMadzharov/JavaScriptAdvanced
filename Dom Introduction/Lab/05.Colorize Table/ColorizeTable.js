function colorize() {
      let tableElements = document.getElementsByTagName('tr');
    let rows = Array.from(tableElements);

    rows.forEach((x, i) =>{
         if (i % 2 != 0 ) {
          x.style.backgroundColor = 'teal';
       }
     })
}