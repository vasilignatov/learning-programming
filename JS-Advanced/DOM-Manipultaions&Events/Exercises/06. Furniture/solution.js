function solve() {

  const textAreas = document.querySelectorAll('textarea');
  const buttons = document.querySelectorAll('button');
  const body = document.querySelector('tbody');

  buttons[0].addEventListener('click', (ev) => {
    const arr = JSON.parse(textAreas[0].value);
    arr.forEach(el => {
      const row = document.createElement('tr');

      const cellImage = document.createElement('td');
      const image = document.createElement('img');
      image.setAttribute('src', el.img);
      cellImage.appendChild(image);

      const cellName = document.createElement('td');
      const name = document.createElement('p')
      name.textContent = el.name;
      cellName.appendChild(name);

      const cellPrice = document.createElement('td');
      const price = document.createElement('p')
      price.textContent = el.price;
      cellPrice.appendChild(price);


      const cellDecor = document.createElement('td');
      const decFactor = document.createElement('p')
      decFactor.textContent = el.decFactor;
      cellDecor.appendChild(decFactor);

      const cellCheck = document.createElement('td');
      const input = document.createElement('input');
      input.setAttribute('type', 'checkbox');

      cellCheck.appendChild(input);
      row.appendChild(cellImage);
      row.appendChild(cellName);
      row.appendChild(cellPrice);
      row.appendChild(cellDecor);
      row.appendChild(cellCheck);

      body.appendChild(row);
    });
  })


  buttons[1].addEventListener('click', (ev) => {
    const furniture = Array.from(body.querySelectorAll('input[type="checkbox"]:checked'))
      .map(input => input.parentNode.parentNode);

    const result = {
      bought: [],
      totalPrice: 0,
      decFactorSum: 0,
    }

    furniture.forEach(row => {
      const cells = row.children;

      const name = cells[1].children[0].textContent;
      result.bought.push(name);

      const currPrice = Number(cells[2].children[0].textContent);
      result.totalPrice += currPrice;

      const decFactor = cells[3].children[0].textContent;
      result.decFactorSum += Number(decFactor);
    })

    textAreas[1].value =
      `Bought furniture: ${result.bought.join(', ')}\nTotal price: ${(result.totalPrice).toFixed(2)}\nAverage decoration factor: ${result.decFactorSum / result.bought.length}`;
  });
}