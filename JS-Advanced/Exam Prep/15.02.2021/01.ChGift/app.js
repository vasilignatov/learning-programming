function solution() {
    const [add, list, sent, discarded] = document.querySelectorAll('section');
    const [input, addBtn] = add.querySelector('div').children;
    const listUl = list.lastElementChild;
    const sentUl = sent.lastElementChild;
    const discardedUl = discarded.lastElementChild;

    addBtn.addEventListener('click', addGift);



    function addGift() {
        let giftName = input.value.trim();

        if (giftName != '') {
            input.value = '';
            const li = e('li', giftName);
            li.setAttribute('class', 'gift');

            const sendBtn = e('button', 'Send');
            sendBtn.setAttribute('class', 'sendButton');

            const discardBtn = e('button', 'Discard');
            sendBtn.setAttribute('class', 'discardButton');

            li.appendChild(sendBtn);
            li.appendChild(discardBtn);

            listUl.appendChild(li);

            sortGifts();
        }
    }

    function sortGifts() {
        const currentUl = Array.from(listUl)
        currentUl.sort((a, b) => {
            a.textContent.localeCompare(b.textContent);
        })
        currentUl.forEach(x => listUl.appendChild(x))
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
};