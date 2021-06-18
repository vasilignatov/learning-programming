function solve() {
  const [input, output] = document.querySelectorAll('textarea');
  const [generateBtn, buyBtn] = document.querySelectorAll('button');

  generateBtn.addEventListener('click', craateProductList);
  buyBtn.addEventListener('click', createPurchase);

  function craateProductList(e) {
    let isGenerate = input.value == '' ? false : true;
    if (isGenerate) {
      const parsedInput = JSON.parse(input.value);
      const table = document.querySelector('tbody');

      input.value = '';
      parsedInput.forEach(product => {
        table.appendChild(createRow(product));
      });
    }
  }

  function createPurchase(e) {
    const checkedProducts = document.querySelectorAll('input[type="checkbox"]');
    let totalPrice = 0;
    let avgDecFactor = 0;
    let productsList = [];

    checkedProducts.forEach(product => {
      if (product.checked) {
        const prRow = product.parentNode.parentNode;
        const currPrName = prRow.children[1].lastChild.textContent;
        const currPrPrice = Number(prRow.children[2].lastChild.textContent);
        const currPrDecFactor = Number(prRow.children[3].lastChild.textContent);

        productsList.push(currPrName);
        totalPrice += currPrPrice;
        avgDecFactor += currPrDecFactor;
      }
    });

    let outputMessage = `Total price: ${totalPrice}\nBought furniture: ${productsList.join(', ')}\nAverage decoration factor: ${(avgDecFactor / productsList.length).toFixed(2)}`;

    output.value = totalPrice != 0 ?
      outputMessage :
      'You aren`t checked any product!';

  }

  function createRow(product) {
    const img = e('img')
    img.src = product.img
  
    const row = e('tr', e('td', img));
    const prName = e('td', e('p', product.name));
    row.appendChild(prName)
  
    const prPrice = e('td', e('p', product.price));
    row.appendChild(prPrice)
  
    const prDecFactor = e('td', e('p', product.decFactor));
    row.appendChild(prDecFactor)
  
    const prCheckbox = e('td');
    const input = e('input');
    input.type = 'checkbox';
  
    prCheckbox.appendChild(input);
    row.appendChild(prCheckbox);
  
    return row;
  }
    
  function e(type, content) {
    const result = document.createElement(type);
    if (content) {
      typeof content === 'string' ?
        result.textContent = content :
        result.appendChild(content);
    }
    return result;
  }
}



