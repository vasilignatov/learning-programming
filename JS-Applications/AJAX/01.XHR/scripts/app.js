
function loadRepos() {
   const res = document.getElementById('res');
   res.innerHTML = '';

   fetch('https://api.github.com/users/testnakov/repos')
      .then((responce) => responce.json())
      .then(handleData);

   function handleData(data) {
      const ul = document.createElement('ul');
      data.forEach(x => {
         const li = document.createElement('li');
         li.textContent = x.name;
         ul.appendChild(li);
      });
      res.appendChild(ul);
   }
}
