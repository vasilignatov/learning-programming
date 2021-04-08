function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   
   function onClick() {
      const input = document.getElementById('searchField').value.toLowerCase(); // входа от инпут полето
      const rows = document.querySelectorAll('tbody tr')
      
      for(let row of rows){
         if (row.textContent.toLocaleLowerCase().includes(input)){
            row.classList.add('select');
         } else {
            row.classList.remove('select')
         }
      }
   }
}


