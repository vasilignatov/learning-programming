function create(words) {
   const output = document.getElementById('content');
   words.forEach(x => output.appendChild(createArticle(x)))
   
   
   function createArticle(text){
      const p = create('p', text);
      p.style.display = 'none';
      
      const div = create('div', p);
      div.addEventListener('click', () => p.style.display = '');

      return div;
   }

   function create(type, content) {
      const element = document.createElement(type);
      typeof content === 'string' ?
      element.textContent = content :
      result.appendChild(content);
      return element;
   }
}