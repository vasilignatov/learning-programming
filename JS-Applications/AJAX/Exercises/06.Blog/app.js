const viewBtn = document.getElementById('btnViewPost');
function attachEvents() {

    document.getElementById('btnLoadPosts').addEventListener('click', getPosts);
    viewBtn.addEventListener('click', displayPost);
    viewBtn.disabled = true;

}

attachEvents();

async function getPosts() {
    viewBtn.disabled = false;
    const select = document.getElementById('posts');
    select.innerHTML = '';
    const url = `http://localhost:3030/jsonstore/blog/posts`;
    const responce = await fetch(url);
    const data = await responce.json();

    Object
        .values(data)
        .map(createOption)
        .forEach(x => select.appendChild(x))
}

function createOption(post) {

    const result = document.createElement('option')
    result.textContent = post.title;
    result.value = post.id;

    return result

}
function displayPost() {
    const postId = document.getElementById('posts').value;
    getCommentsById(postId)
}

async function getCommentsById(postId) {
    const postUrl = `http://localhost:3030/jsonstore/blog/posts/` + postId;
    const commentsUrl = `http://localhost:3030/jsonstore/blog/comments`;

    const commentsUl = document.getElementById('post-comments')
    commentsUl.innerHTML = '';

    const [postResponce, commentsResponce] = await Promise.all([
        fetch(postUrl),
        fetch(commentsUrl)
    ])

    const postData = await postResponce.json()
    document.getElementById('post-title').textContent = postData.title;
    document.getElementById('post-body').textContent = postData.body;


    const commentsData = await commentsResponce.json();

    const comments = Object.values(commentsData).filter(c => c.postId == postId);
    comments.map(createComment).forEach(c => commentsUl.appendChild(c));
}

function createComment(comment) {
    const result = document.createElement('li');
    result.textContent = comment.text
    result.id = comment.id;
    return result;
}