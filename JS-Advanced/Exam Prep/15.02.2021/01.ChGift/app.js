function solution() {
    const [listUl, sentUl, discardedUl] = document.querySelectorAll('section ul');
    const input = document.querySelector('input');
    document.querySelector('button').addEventListener('click', addGift);

    function addGift() {
        let giftName = input.value;
        input.value = '';
        const li = e('li', giftName, 'gift');

        const sendBtn = e('button', 'Send', 'sendButton');
        const discardBtn = e('button', 'Discard', 'discardButton');

        li.appendChild(sendBtn);
        li.appendChild(discardBtn);

        listUl.appendChild(li);

        sendBtn.addEventListener('click', () => sendGifts(giftName, li));
        discardBtn.addEventListener('click', () => discardGifts(giftName, li));

        sortGifts();
    }

    function sortGifts() {
        Array
            .from(listUl.children)
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(g => listUl.appendChild(g));
    }

    function sendGifts(name, gift) {
        const liEl = e('li', name, 'gift');
        sentUl.appendChild(liEl);
        listUl.removeChild(gift);

    }
    function discardGifts(name, gift) {
        const liEl = e('li', name, 'gift');
        discardedUl.appendChild(liEl);
        listUl.removeChild(gift);
    }

    function e(type, content, className) {
        const result = document.createElement(type);

        if (typeof content == 'string') {
            result.textContent = content;
        }

        if (className) {
            result.setAttribute('class', className)
        }

        return result;
    }
};  