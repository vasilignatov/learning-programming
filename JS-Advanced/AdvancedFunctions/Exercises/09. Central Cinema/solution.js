// function solve() {
//     const formElements = Array.from(document.querySelector('#container').children);
//     const inputs = formElements.slice(0, formElements.length - 1);
//     const onScreenBtn = formElements.slice(formElements.length - 1)[0];
//     const moviesUl = document.querySelector('#movies>ul');
//     const archiveUl = document.querySelector('#archive>ul');
//     const clearBtn = document.querySelector('#archive>button');


//     function clear(e) {
//         e.target.parentNode.children[1].textContent = '';
//     } 

//     function archive(e) {
//         const li = e.target.parentNode.parentNode;
//         const div = e.target.parentNode;
//         const input = div.children[1].value;
//         if(!Number(input.value)) {return;}

//         const span = document.createElement('span');
//         const name = li.children[0].textContent;
//         span.textContent = name;

//         const strong = document.createElement('strong');

//         const price = Number(div.children[0].textContent);
//         const totalPrice = price * Number(input);
//         strong.textContent = `Total amount: ${totalPrice.toFixed(2)}`

//         const deleteBtn = document.createElement('button');
//         deleteBtn.textContent = 'Delete'
//         deleteBtn.addEventListener('click', (ev) => {
//             ev.target.parentNode.remove();
//         })

//         const resultLi = document.createElement('li');
//         resultLi.appendChild(span);
//         resultLi.appendChild(strong);
//         resultLi.appendChild(deleteBtn);

//         archiveUl.appendChild(resultLi)

//         li.remove()
//     }

//     function createMovie(e) {
//         e.preventDefault();

//         const name = inputs[0].value;
//         const hall = inputs[1].value;
//         const price = Number(inputs[2].value);

//         if (!name || !hall || !price) { return; }
//         inputs[0].value = '';
//         inputs[1].value = '';
//         inputs[2].value = '';

//         const li = document.createElement('li');

//         const span = document.createElement('span');
//         span.textContent = name;
//         li.appendChild(span);

//         const strong = document.createElement('strong');
//         strong.textContent = `Hall: ${hall}`;
//         li.appendChild(strong);

//         const div = document.createElement('div');
//         const innerStrong = document.createElement('strong');
//         innerStrong.textContent = price.toFixed(2);
//         const input = document.createElement('input');
//         input.setAttribute('placeholder', 'Tickets Sold');
//         const archiveBtn = document.createElement('button');
//         archiveBtn.textContent = 'Archive';
//         archiveBtn.addEventListener('click', archive)

//         div.appendChild(innerStrong);
//         div.appendChild(input);
//         div.appendChild(archiveBtn);


//         li.appendChild(div);

//         moviesUl.appendChild(li)
//     }

//     clearBtn.addEventListener('click', clear);
//     onScreenBtn.addEventListener('click', createMovie);
// }


function solve() {

    const [movieName, movieHall, moviePrice] = document.querySelectorAll('input');
    const onScreenBtn = document.querySelector('#container button');
    const moviesUl = document.querySelector('#movies ul');
    const archiveUl = document.querySelector('#archive ul');
    const clearBtn = document.querySelector('#archive button');

    function createMovie(ev) {
        ev.preventDefault();

        let name = movieName.value;
        let hall = movieHall.value;
        let price = Number(moviePrice.value);

        if (!price || !hall || !name) { return; }

        moviePrice.value = '';
        movieName.value = '';
        movieHall.value = '';

        const inputEl = document.createElement('input');
        inputEl.placeholder = 'Tickets Sold';

        const liEl = e('li',
            e('span', name),
            e('strong', 'Hall: ' + hall),
            e('div',
                e('strong', price.toFixed(2)),
                inputEl,
                e('button', 'Archive')
            ));

        moviesUl.appendChild(liEl);
    }

    function archive(ev) {
        if (ev.target.tagName == 'BUTTON') {
            const btn = ev.target;
            const ticketSold = Number(btn.parentNode.children[1].value);

            if (ticketSold) {
                const archName = btn.parentNode.parentNode.firstElementChild.textContent;
                const price = Number(btn.parentNode.children[0].textContent);

                const totalAmount = price * ticketSold;

                archiveUl.appendChild(e('li',
                    e('span', archName),
                    e('strong', `Total amount: ${totalAmount.toFixed(2)}`),
                    e('button', 'Delete')));

                btn.parentNode.parentNode.remove(btn);
            }
        }
    }

    function deleteMovie(ev) {
        if (ev.target.tagName == 'BUTTON') {
            ev.target.parentNode.remove(ev.target);
        }
    }

    function clear(ev) {
        ev.target.parentNode.children[1].textContent = '';
    }

    function e(type, ...content) {
        const result = document.createElement(type);

        content.forEach(e => {
            if (typeof e == 'string') {
                const node = document.createTextNode(e);
                result.appendChild(node);
            } else {
                result.appendChild(e);
            }
        });

        return result;
    }


    onScreenBtn.addEventListener('click', createMovie);
    clearBtn.addEventListener('click', clear)
    archiveUl.addEventListener('click', deleteMovie)
    moviesUl.addEventListener('click', archive);
}
