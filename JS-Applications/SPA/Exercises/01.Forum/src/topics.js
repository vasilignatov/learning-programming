import { clearInputs, e } from './dom.js';

function canclePostClickHandler(event) {
    event.preventDefault();

    const title = document.getElementById('topicName')
    const username = document.getElementById('username');
    const postText = document.getElementById('postText');


    if (event.target.className == 'cancel') {
        clearInputs(title, username, postText);
    } else if (event.target.className == 'public') {
        if (title.value == '' || username.value == '' || postText.value == '') {
            return alert('All fields are required!');
        }
        const time = new Date();
        postTopic(title.value, username.value, postText.value, time);
        clearInputs(title, username, postText);
    }
}

async function postTopic(title, username, content, time) {
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, username, content, time })
    })

    if (!response.ok) {
        const err = await response.json();
        return alert(err.message);
    }
}


const asd = (ev) => { console.log(ev.target.id);


function createTopic(topic) {
    console.log(topic.title);
    const div = e('div', { className: 'topic-container' });
    const link = e('a', { href: '#', className: 'normal', id: topic._id, onClick: asd }, e('h2', {}, `${topic.title}`));
    div.innerHTML = `
        <div class="topic-container">
            <div class="topic-name-wrapper">
                <div class="topic-name">
                    ${link.trim}
                    <div class="columns">
                        <div>
                            <p>Date: <time>${topic.time}</time></p>
                            <div class="nick-name">
                                <p>Username: <span>${topic.username}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>`;

    return div;
}

async function getAllTopics() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');
    if (response.ok) {
        const data = await response.json()
        return data;
    }
    const err = await response.json();
    return alert(err.message)
}



let container;
let view;
const divTopics = document.querySelector('.topic-container');

async function handleTopics() {
    divTopics.innerHTML = '<p>Loading...</p>'
    const topics = await getAllTopics();

    divTopics.innerHTML = '';
    Object.values(topics)
        .map(t => createTopic(t))
        .forEach( t => divTopics.appendChild(t))
}


export function setupTopics(containerTarget, viewTarget) {
    container = containerTarget;
    view = viewTarget;

    view.querySelector('.new-topic-buttons').addEventListener('click', canclePostClickHandler);
}

export function viewTopics() {
    container.innerHTML = '';
    container.appendChild(view);

    handleTopics();
}