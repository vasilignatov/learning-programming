function loadCommits() {

    const username = document.getElementById('username').value;
    const repository = document.getElementById('repo').value;
    const url = `https://api.github.com/repos/${username}/${repository}/commits`
    const ulEl = document.getElementById('commits');
    
    fetch(url)
    .then((responce) => responce.json())
    .then((data) => {
        data.forEach(r => {
                const liEl = document.createElement('li');
                liEl.textContent = `${r.commit.author.name}: ${r.commit.message}`;
                ulEl.appendChild(liEl);
            });
        })
        .catch((err) => {
            const liEl = document.createElement('li');
            liEl.textContent = `Error: ${err.status} (Not Found)`;
            ulEl.appendChild(liEl);
        })

}