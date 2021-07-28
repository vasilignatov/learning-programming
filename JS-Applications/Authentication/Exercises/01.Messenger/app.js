function attachEvents() {

    document.getElementById('submit').addEventListener('click', async () => {
        const author = document.getElementsByName('author')[0].value;
        const content = document.getElementsByName('content')[0].value;
        
        if (author == '' || content == '') { return alert('All fields are required!') }
        
        await sendMessage({ author, content });

        document.querySelectorAll('input')[0].value = '';
        document.querySelectorAll('input')[1].value = '';
    });

    document.getElementById('refresh').addEventListener('click', getMessages);
    setInterval(getMessages, 3000);
}
attachEvents();

async function getMessages() {
    const response = await fetch('http://localhost:3030/jsonstore/messenger');
    const data = await response.json();

    const messages = Object.values(data).reduce((acc, c) => acc += `${c.author}: ${c.content}\n`, '')
    document.getElementById('messages').value = messages;
}

async function sendMessage(message) {
    const response = await fetch('http://localhost:3030/jsonstore/messenger', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message)
    })

}
