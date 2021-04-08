function solve() {
  const text = document.getElementById('text').value;
  const convention = document.getElementById('naming-convention').value;
  const result = document.getElementById('result');

  if (convention == 'Camel Case') {
    result.textContent = camelCase(text);
  } else if (convention == 'Pascal Case') {
    result.textContent = pascalCase(text);
  } else {
    result.textContent = 'Error!'
  }

  function pascalCase(str) {
    return str.toLowerCase()
      .split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join('');
  }

  function camelCase(str) {
    return str.toLowerCase()
      .split(' ')
      .map((word, i) => {
        return word = i == 0 ?
        word :
        word[0].toUpperCase() + word.slice(1)
      })
      .join('');
  }
}



// function solve() {
//   const text = document.getElementById('text').value;
//   const naming = document.getElementById('naming-convention').value;

//   function toPascalCase(string) {
//     return `${string}`
//       .toLowerCase()
//       .replace(new RegExp(/[^\w\s]/, 'g'), '')
//       .replace(
//         new RegExp(/\s+(.)(\w+)/, 'g'),
//         ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
//       )
//       .replace(new RegExp(/\s/, 'g'), '')
//       .replace(new RegExp(/\w/), s => s.toUpperCase());
//   }

//   function toCamelCase(strArr) {
//     let str = strArr.split(' ')
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//       let current = str[i];
//       let tempStr = current.toLowerCase();
//       if (i != 0) {
//         tempStr = tempStr.substring(0,1).toUpperCase() + tempStr.substring(1);
//       }
//       result += tempStr
//     }
//     console.log(result);
//     return result;
//   }

//   switch (naming) {
//     case 'Pascal Case':
//       document.getElementById('result').textContent = toPascalCase(text);
//       break;
//     case 'Camel Case':
//       document.getElementById('result').textContent = toCamelCase(text);
//       break;
//     default:
//       document.getElementById('result').textContent = 'Error!'
//       break;
//   }

// }