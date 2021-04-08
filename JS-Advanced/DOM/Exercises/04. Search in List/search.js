function search() {

   const list = Array.from(document.getElementById('towns').children);
   const input = document.getElementById('searchText').value;
   const result = document.getElementById('result');

   let matchCounter = 0;

   list.forEach(x => {

      if (x.textContent.toLowerCase().includes(input.toLowerCase()) && input != '') {
         matchCounter++;
         x.style.textDecoration = "underline";
         x.style.fontWeight = 'bold';
      } else {
         x.style.fontWeight = '';
         x.style.textDecoration = 'none';
      }
   })
   result.textContent = `${matchCounter} matches found`;
}
