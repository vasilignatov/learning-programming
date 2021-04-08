function solve() {
  const input = document.getElementById('input').value;
  const output = document.getElementById('output');
  const regex = /[^.?!]+[.?!]/gm;
  input.match(regex)
    .reduce(reduceFunction, [])
    .forEach(creatNewP);

    function reduceFunction(acc, sentence, index) {
      if(index % 3 == 0) {
        acc.push(sentence);
      } else {
        acc[acc.length -1] = acc[acc.length -1] + sentence;
      }
      return acc;
    }

    function creatNewP(p) {
      const pElement = document.createElement('p');
      pElement.textContent = p;
      output.appendChild(pElement);
    }
}