// function create(words) {
//    const content = document.getElementById('content');

//    words.forEach(str => {
//       const curDiv = document.createElement('div');
//       const p = document.createElement('p');
//       p.textContent = str;
//       p.style.display = 'none';
//       curDiv.appendChild(p);
//       content.appendChild(curDiv);
//    });

//    content.addEventListener('mouseleave', (ev) => {
//       if (ev.target.tagName === 'DIV' || ev.target.tagName === 'P') {
//          const p = ev.target.children[0] || ev.target;
//          const isVisible = p.style.display === 'block';
//          p.style.display = isVisible ? 'none' : 'block';
//       }
//    })
// }



// function create(words) {

//    let parrent = document.getElementById('content');
//    parrent.addEventListener('click', onclick);

//    words.map(word => {
//       let divEl = document.createElement('div');
//       let pElement = document.createElement('p');
//       pElement.textContent = word;
//       pElement.style.display = 'none';
//       divEl.appendChild(pElement);
//       parrent.appendChild(divEl);
//    })

//    function onclick(e) {
//       let current = Array.from(e.target.children)[0];
//       isVisible = current.style.display === 'block'
//       current.style.display = isVisible ? 'none' : 'block';
//    }
// }

function create(words) {
    let parrent = document.getElementById('content');
    parrent.addEventListener('click', onClickFunc);

    words.map(x => {
        const divEl = e('div', 0, 0, e('p', x, 'none'));
        parrent.appendChild(divEl);
    });

    
    function onClickFunc(e) {
        let clicked = Array.from(e.target.children)[0];
        let isVisible = clicked.style.display === 'none';
        clicked.style.display = isVisible ? 'block' : 'none'
    }

    function e(tagName, content, style, children) {
        const el = document.createElement(tagName);
        if (content) el.textContent = content;
        if (style) el.style.display = style;
        if (children) el.appendChild(children);
        return el;
    }
}
