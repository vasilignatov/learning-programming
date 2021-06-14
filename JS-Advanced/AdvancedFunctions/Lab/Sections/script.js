function create(words) {

   const output = document.getElementById('content');

   words.forEach(w => output.appendChild(createArticle(w)));


   function createArticle(text) {
      const pEl = e('p', text);
      pEl.style.display = 'none';

      const divEl = e('div', pEl);
      divEl.addEventListener('click', () => {
         pEl.style.display = 'block';
      })

      return divEl;
   }


   function e(type, content) {
      const result = document.createElement(type);

      if (typeof content == 'string') {
         result.textContent = content;
      } else {
         result.appendChild(content)
      }

      return result;
   }

}